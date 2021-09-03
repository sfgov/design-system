const pkg = require('../../package.json')
const { git, branch, sha } = require('../../lib/git')
const { Octokit } = require('@octokit/rest')

const [owner, repo] = pkg.repository.split('/')
const github = new Octokit({ auth: process.env.GITHUB_TOKEN })

const gitMetaCache = new Map()

let publishedVersion

module.exports = {
  package: {
    async version () {
      if (!publishedVersion) {
        publishedVersion = await getPublishedStatusVersion() || pkg.version
      }
      return publishedVersion
    }
  },
  git: {
    commit (data) {
      const path = data.page.inputPath.replace(/^\.\//, '')
      return getLastCommit(path)
    }
  }
}

async function getLastCommit (path) {
  let meta
  if (gitMetaCache.has(path)) {
    return await gitMetaCache.get(path)
  }

  if (process.env.NODE_ENV === 'development') {
    meta = getLastCommitFromGit(path)
  } else if (github) {
    const promise = getLastCommitFromGitHub(path)
    // put the promise in the cache so that simultaneous requests for the same
    // path await the same request
    gitMetaCache.set(path, promise)
    meta = await promise
  }
  gitMetaCache.set(path, meta)
  return meta
}

function getLastCommitFromGit (path) {
  console.info('getting last commit from `git log -1 -- %s`', path)
  const log = git('log', '-1', '--', path)
  const [first, second, third] = log.split('\n')
  const name = match(second, /Author: (.+) </, 1)
  const login = match(second, /<([^@]+)@users\.noreply\.github\.com>/, 1)
  return {
    sha: match(first, /^commit ([a-f0-9]+)/, 1),
    author: { name, login },
    date: match(third, /Date: +(.+)/, 1)
  }
}

async function getLastCommitFromGitHub (path) {
  const args = {
    owner,
    repo,
    path,
    sha: branch,
    per_page: 1
  }

  console.info('getting last commit from github:', args)

  let res, commits
  try {
    res = await github.rest.repos.listCommits(args)
    commits = res.data
  } catch (error) {
    console.warn('error loading commits for "%s"', path, error)
    gitMetaCache.set(path, null)
    return null
  }

  if (commits?.length) {
    const [{ sha, commit, author }] = commits
    const meta = {
      sha,
      date: commit.author?.date,
      author: {
        name: commit.author?.name,
        login: author?.login
      }
    }
    // console.info('caching git meta for "%s"', path, meta)
    return meta
  } else {
    console.warn('unable to get commit for "%s"', path, res)
    return null
  }
}

async function getPublishedStatusVersion () {
  try {
    const data = await github.repos.listCommitStatusesForRef({
      owner,
      repo,
      ref: sha
    })
    const versionStatus = data.statuses?.find(status => {
      return status.state === 'success' && status.context.includes('publish')
    })
    if (versionStatus) {
      console.info('got published version status:', versionStatus)
      return versionStatus.description
    } else {
      console.warn('no published version status for %s', sha)
    }
  } catch (error) {
    console.warn('unable to get published version status:', error)
  }
}

function match (str, pattern, index = 1) {
  const m = str ? str.match(pattern) : null
  return m ? m[index] : null
}

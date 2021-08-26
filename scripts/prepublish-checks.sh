#!/bin/bash
set -e
echo "Running prepublish checks..."
echo

function assert_exists () {
  missing=0
  for path in "$@"; do
    if [ -e "$path" ]; then
      echo "✅ $path"
    else
      echo "❌ $path"
      missing=1
    fi
  done
  return $missing
}

echo "Checking for expected files..."
assert_exists dist/css/{sfds,base,components,typography,utilities}.css || exit 1

echo "🚀 Good to go!"

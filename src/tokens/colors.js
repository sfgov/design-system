const brightBlue = '#4f66ee'
const sequentialColors = {
  darkBlue: {
    7: '#0d1670',
    6: '#2f287a',
    5: '#463a84',
    4: '#5a4d8f',
    3: '#6e6099',
    2: '#8074a3',
    1: '#9389ad'
  },
  orange: {
    7: '#eb6d05',
    6: '#ce610f',
    5: '#b15514',
    4: '#964a17',
    3: '#7b3f18',
    2: '#603418',
    1: '#472917'
  },
  teal: {
    7: '#279d9a',
    6: '#208e8b',
    5: '#197f7c',
    4: '#12706d',
    3: '#0b625f',
    2: '#055451',
    1: '#004644'
  },
  blue: {
    7: '#0099e8',
    6: '#1389cf',
    5: '#1b7ab7',
    4: '#1f6ba0',
    3: '#205c89',
    2: '#204e73',
    1: '#1e405d'
  },
  purple: {
    7: '#7e5acc',
    6: '#6e4fb1',
    5: '#5e4397',
    4: '#4f397d',
    3: '#402e65',
    2: '#32244d',
    1: '#241a37'
  },
  pink: {
    7: '#d5006d',
    6: '#b90e5f',
    5: '#9e1451',
    4: '#831644',
    3: '#691737',
    2: '#51152b',
    1: '#39121f'
  },
  grey: {
    0: '#c6c6c6'
  }
}

module.exports = {
  none: 'transparent',
  white: '#FFF',
  black: '#212123',
  secondaryText: '#59595c',
  action: brightBlue,
  blue: {
    1: '#edf4f7',
    2: '#a9d6ea',
    bright: brightBlue,
    dark: '#0c1464',
    dark2: sequentialColors.darkBlue[7]
  },
  slate: {
    DEFAULT: '#1c3e57',
    light: '#607889',
    4: '#002B48',
    3: '#1D4D70',
    2: '#5b7c94',
    1: '#CEDAE4'
  },
  green: {
    4: '#1B674D',
    3: '#00896D',
    2: '#C0E2C5',
    1: '#E9F7EC'
  },
  red: {
    4: '#BC4427',
    3: '#C9563A',
    2: '#EFCABB',
    1: '#F5E9E5'
  },
  purple: {
    4: '#5D4099',
    3: '#7D61B3',
    2: '#CCCCED',
    1: '#EDEBF6'
  },
  yellow: {
    4: '#E7B22E',
    3: '#F4C435',
    2: '#F9E3A3',
    1: '#F8F1DF'
  },
  grey: {
    dark: '#424244',
    4: '#D3D3D3',
    3: '#E9E9E9',
    2: '#F1F1F1',
    1: '#F8F8F8'
  },
  sequentialColors
}

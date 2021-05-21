const choices = {
  colors: {
    brand: {
      koromiko: '#fcb64d',
      chiffon: '#fefcb9',
      beige: '#fefce7',
      cinnabar: '#f04c39',
      mandyspink: '#febb9f',
      dawnpink: '#fcdcd9',
      bayofmany: '#204282',
      poloblue: '#8ea4ce',
      mystic: '#eceff4',
      tuna: '#494949',
      orange: '#fc9e12'
    },
    transparent: 'transparent',

    black: '#000',
    white: '#fff',

    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c'
    },
    red: {
      100: '#fff5f5',
      200: '#fed7d7',
      300: '#feb2b2',
      400: '#fc8181',
      500: '#f56565',
      600: '#e53e3e',
      700: '#c53030',
      800: '#9b2c2c',
      900: '#742a2a'
    },
    orange: {
      100: '#fffaf0',
      200: '#feebc8',
      300: '#fbd38d',
      400: '#f6ad55',
      500: '#ed8936',
      600: '#dd6b20',
      700: '#c05621',
      800: '#9c4221',
      900: '#7b341e'
    },
    yellow: {
      100: '#fffff0',
      200: '#fefcbf',
      300: '#faf089',
      400: '#f6e05e',
      500: '#ecc94b',
      600: '#d69e2e',
      700: '#b7791f',
      800: '#975a16',
      900: '#744210'
    },
    green: {
      100: '#f0fff4',
      200: '#c6f6d5',
      300: '#9ae6b4',
      400: '#68d391',
      500: '#48bb78',
      600: '#38a169',
      700: '#2f855a',
      800: '#276749',
      900: '#22543d'
    },
    teal: {
      100: '#e6fffa',
      200: '#b2f5ea',
      300: '#81e6d9',
      400: '#4fd1c5',
      500: '#38b2ac',
      600: '#319795',
      700: '#2c7a7b',
      800: '#285e61',
      900: '#234e52'
    },
    blue: {
      100: '#ebf8ff',
      200: '#bee3f8',
      300: '#90cdf4',
      400: '#63b3ed',
      500: '#4299e1',
      600: '#3182ce',
      700: '#2b6cb0',
      800: '#2c5282',
      900: '#2a4365'
    },
    indigo: {
      100: '#ebf4ff',
      200: '#c3dafe',
      300: '#a3bffa',
      400: '#7f9cf5',
      500: '#667eea',
      600: '#5a67d8',
      700: '#4c51bf',
      800: '#434190',
      900: '#3c366b'
    },
    purple: {
      100: '#faf5ff',
      200: '#e9d8fd',
      300: '#d6bcfa',
      400: '#b794f4',
      500: '#9f7aea',
      600: '#805ad5',
      700: '#6b46c1',
      800: '#553c9a',
      900: '#44337a'
    },
    pink: {
      100: '#fff5f7',
      200: '#fed7e2',
      300: '#fbb6ce',
      400: '#f687b3',
      500: '#ed64a6',
      600: '#d53f8c',
      700: '#b83280',
      800: '#97266d',
      900: '#702459'
    }
  },
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem'
  },
  screens: {
    xs: '420px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    max: {
      xs: '419px',
      sm: '639px',
      md: '767px',
      lg: '1023px',
      xl: '1279px'
    }
  },
  fontFamily: {
    serif: ['"Roboto Slab"', '"Times New Roman"', 'serif'],
    sans: ['Apercu', 'Arial', 'sans-serif'],
    mono: ['"Roboto Mono"', 'Consolas', 'monospace']
  },
  fontSize: {
    base: {
      mobile: '16px',
      desktop: '18px'
    },
    xs: '.75rem',
    sm: '.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem'
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacing: {
    tighter: '-.05em',
    tight: '-.025em',
    normal: '0',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em'
  },
  // prettier-ignore
  shadows: {
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
    down: {
      sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
    },
    up: {
      sm: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)'
    }
  },
  minHeight: {
    0: '0',
    full: '100%',
    screen: '100vh'
  },
  minWidth: {
    0: '0',
    full: '100%'
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px'
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  }
}

const choicesString = JSON.stringify(choices)

const expected =
`:root {
  --colors-brand-koromiko: #fcb64d;
  --colors-brand-chiffon: #fefcb9;
  --colors-brand-beige: #fefce7;
  --colors-brand-cinnabar: #f04c39;
  --colors-brand-mandyspink: #febb9f;
  --colors-brand-dawnpink: #fcdcd9;
  --colors-brand-bayofmany: #204282;
  --colors-brand-poloblue: #8ea4ce;
  --colors-brand-mystic: #eceff4;
  --colors-brand-tuna: #494949;
  --colors-brand-orange: #fc9e12;
  --colors-transparent: transparent;
  --colors-black: #000;
  --colors-white: #fff;
  --colors-gray-100: #f7fafc;
  --colors-gray-200: #edf2f7;
  --colors-gray-300: #e2e8f0;
  --colors-gray-400: #cbd5e0;
  --colors-gray-500: #a0aec0;
  --colors-gray-600: #718096;
  --colors-gray-700: #4a5568;
  --colors-gray-800: #2d3748;
  --colors-gray-900: #1a202c;
  --colors-red-100: #fff5f5;
  --colors-red-200: #fed7d7;
  --colors-red-300: #feb2b2;
  --colors-red-400: #fc8181;
  --colors-red-500: #f56565;
  --colors-red-600: #e53e3e;
  --colors-red-700: #c53030;
  --colors-red-800: #9b2c2c;
  --colors-red-900: #742a2a;
  --colors-orange-100: #fffaf0;
  --colors-orange-200: #feebc8;
  --colors-orange-300: #fbd38d;
  --colors-orange-400: #f6ad55;
  --colors-orange-500: #ed8936;
  --colors-orange-600: #dd6b20;
  --colors-orange-700: #c05621;
  --colors-orange-800: #9c4221;
  --colors-orange-900: #7b341e;
  --colors-yellow-100: #fffff0;
  --colors-yellow-200: #fefcbf;
  --colors-yellow-300: #faf089;
  --colors-yellow-400: #f6e05e;
  --colors-yellow-500: #ecc94b;
  --colors-yellow-600: #d69e2e;
  --colors-yellow-700: #b7791f;
  --colors-yellow-800: #975a16;
  --colors-yellow-900: #744210;
  --colors-green-100: #f0fff4;
  --colors-green-200: #c6f6d5;
  --colors-green-300: #9ae6b4;
  --colors-green-400: #68d391;
  --colors-green-500: #48bb78;
  --colors-green-600: #38a169;
  --colors-green-700: #2f855a;
  --colors-green-800: #276749;
  --colors-green-900: #22543d;
  --colors-teal-100: #e6fffa;
  --colors-teal-200: #b2f5ea;
  --colors-teal-300: #81e6d9;
  --colors-teal-400: #4fd1c5;
  --colors-teal-500: #38b2ac;
  --colors-teal-600: #319795;
  --colors-teal-700: #2c7a7b;
  --colors-teal-800: #285e61;
  --colors-teal-900: #234e52;
  --colors-blue-100: #ebf8ff;
  --colors-blue-200: #bee3f8;
  --colors-blue-300: #90cdf4;
  --colors-blue-400: #63b3ed;
  --colors-blue-500: #4299e1;
  --colors-blue-600: #3182ce;
  --colors-blue-700: #2b6cb0;
  --colors-blue-800: #2c5282;
  --colors-blue-900: #2a4365;
  --colors-indigo-100: #ebf4ff;
  --colors-indigo-200: #c3dafe;
  --colors-indigo-300: #a3bffa;
  --colors-indigo-400: #7f9cf5;
  --colors-indigo-500: #667eea;
  --colors-indigo-600: #5a67d8;
  --colors-indigo-700: #4c51bf;
  --colors-indigo-800: #434190;
  --colors-indigo-900: #3c366b;
  --colors-purple-100: #faf5ff;
  --colors-purple-200: #e9d8fd;
  --colors-purple-300: #d6bcfa;
  --colors-purple-400: #b794f4;
  --colors-purple-500: #9f7aea;
  --colors-purple-600: #805ad5;
  --colors-purple-700: #6b46c1;
  --colors-purple-800: #553c9a;
  --colors-purple-900: #44337a;
  --colors-pink-100: #fff5f7;
  --colors-pink-200: #fed7e2;
  --colors-pink-300: #fbb6ce;
  --colors-pink-400: #f687b3;
  --colors-pink-500: #ed64a6;
  --colors-pink-600: #d53f8c;
  --colors-pink-700: #b83280;
  --colors-pink-800: #97266d;
  --colors-pink-900: #702459;
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --spacing-40: 10rem;
  --spacing-48: 12rem;
  --spacing-56: 14rem;
  --spacing-64: 16rem;
  --spacing-px: 1px;
  --screens-xs: 420px;
  --screens-sm: 640px;
  --screens-md: 768px;
  --screens-lg: 1024px;
  --screens-xl: 1280px;
  --screens-max-xs: 419px;
  --screens-max-sm: 639px;
  --screens-max-md: 767px;
  --screens-max-lg: 1023px;
  --screens-max-xl: 1279px;
  --fontFamily-serif: "Roboto Slab", "Times New Roman", serif;
  --fontFamily-sans: Apercu, Arial, sans-serif;
  --fontFamily-mono: "Roboto Mono", Consolas, monospace;
  --fontSize-base-mobile: 16px;
  --fontSize-base-desktop: 18px;
  --fontSize-xs: 0.75rem;
  --fontSize-sm: 0.875rem;
  --fontSize-md: 1rem;
  --fontSize-lg: 1.125rem;
  --fontSize-xl: 1.25rem;
  --fontSize-2xl: 1.5rem;
  --fontSize-3xl: 1.875rem;
  --fontSize-4xl: 2.25rem;
  --fontSize-5xl: 3rem;
  --fontSize-6xl: 4rem;
  --fontWeight-hairline: 100;
  --fontWeight-thin: 200;
  --fontWeight-light: 300;
  --fontWeight-normal: 400;
  --fontWeight-medium: 500;
  --fontWeight-semibold: 600;
  --fontWeight-bold: 700;
  --fontWeight-extrabold: 800;
  --fontWeight-black: 900;
  --lineHeight-none: 1;
  --lineHeight-tight: 1.25;
  --lineHeight-snug: 1.375;
  --lineHeight-normal: 1.5;
  --lineHeight-relaxed: 1.625;
  --lineHeight-loose: 2;
  --letterSpacing-tighter: -0.05em;
  --letterSpacing-tight: -0.025em;
  --letterSpacing-normal: 0;
  --letterSpacing-wide: 0.025em;
  --letterSpacing-wider: 0.05em;
  --letterSpacing-widest: 0.1em;
  --shadows-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
  --shadows-none: none;
  --shadows-down-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadows-down-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadows-down-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadows-down-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadows-down-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadows-down-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadows-up-sm: 0 -1px 3px 0 rgba(0, 0, 0, 0.1),
    0 -1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadows-up-md: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
    0 -2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadows-up-lg: 0 -10px 15px -3px rgba(0, 0, 0, 0.1),
    0 -4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadows-up-xl: 0 -20px 25px -5px rgba(0, 0, 0, 0.1),
    0 -10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadows-up-2xl: 0 -25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadows-up-inner: inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06);
  --minHeight-0: 0;
  --minHeight-full: 100%;
  --minHeight-screen: 100vh;
  --minWidth-0: 0;
  --minWidth-full: 100%;
  --opacity-0: 0;
  --opacity-25: 0.25;
  --opacity-50: 0.5;
  --opacity-75: 0.75;
  --opacity-100: 1;
  --borderRadius-none: 0;
  --borderRadius-sm: 0.125rem;
  --borderRadius-md: 0.25rem;
  --borderRadius-lg: 0.5rem;
  --borderRadius-full: 9999px;
  --zIndex-0: 0;
  --zIndex-10: 10;
  --zIndex-20: 20;
  --zIndex-30: 30;
  --zIndex-40: 40;
  --zIndex-50: 50;
  --zIndex-auto: auto;
}`

module.exports = { choices, choicesString, expected }

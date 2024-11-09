/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./demo/**/*.{html,css}', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      screens: {
        surehover: { raw: '(hover: hover) and (pointer: fine)' },
      },
      backgroundImage: {
        'light-arrow':
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nIzBmMTcyYScgZD0nTTEyIDE2Yy0uMyAwLS41LS4xLS43LS4zbC02LTZjLS40LS40LS40LTEgMC0xLjRzMS0uNCAxLjQgMGw1LjMgNS4zIDUuMy01LjNjLjQtLjQgMS0uNCAxLjQgMHMuNCAxIDAgMS40bC02IDZjLS4yLjItLjQuMy0uNy4zeicvPjwvc3ZnPg==")',
        'dark-arrow':
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nI2ZmZicgZD0nTTEyIDE2Yy0uMyAwLS41LS4xLS43LS4zbC02LTZjLS40LS40LS40LTEgMC0xLjRzMS0uNCAxLjQgMGw1LjMgNS4zIDUuMy01LjNjLjQtLjQgMS0uNCAxLjQgMHMuNCAxIDAgMS40bC02IDZjLS4yLjItLjQuMy0uNy4zeicvPjwvc3ZnPg==")',
        'light-mode': 'linear-gradient(145deg, rgb(6 182 212 / 4%) 12%, rgb(6 182 212 / 10%) 42%, rgb(6 182 212 / 5%) 60%, rgb(6 182 212 / 18%) 85%)',
        'dark-mode': 'linear-gradient(145deg, rgb(6 182 212 / 0%) 12%, rgb(6 182 212 / 3%) 42%, rgb(6 182 212 / 10%) 60%, rgb(6 182 212 / 4%) 85%)',
      },
      colors: {
        'calendar': {
          'white': 'var(--calendar-color-white)',
          'slate': {
            50: 'var(--calendar-color-slate-50)',
            100: 'var(--calendar-color-slate-100)',
            200: 'var(--calendar-color-slate-200)',
            300: 'var(--calendar-color-slate-300)',
            400: 'var(--calendar-color-slate-400)',
            500: 'var(--calendar-color-slate-500)',
            600: 'var(--calendar-color-slate-600)',
            900: 'var(--calendar-color-slate-900)',
          },
          'main': 'var(--calendar-color-main)',
          'weekend': {
            'enabled': 'var(--calendar-color-weekend-enabled)',
            'disabled': 'var(--calendar-color-weekend-disabled)',
          },
          'time': {
            'enabled': 'var(--calendar-color-time-enabled)',
            'focus': 'var(--calendar-color-time-focus)',
          }
        },
      },
    },
  },
  corePlugins: {
    borderOpacity: false,
    textOpacity: false,
  },
};

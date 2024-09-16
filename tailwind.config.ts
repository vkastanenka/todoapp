import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      nunito: [
        'var(--font-nunito)',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
      ],
    },
    screens: {
      xl: '1280px',
      lg: '1024px',
      'md-large': '890px',
      md: '768px',
      sm: '640px',
      xs: '480px',
      xxs: '320px',
    },
    extend: {
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(225deg, #2A2A2E 11%, #2B125A 47%, #000000 85%);',
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        grey: {
          '100': 'var(--grey-100)',
          '200': 'var(--grey-200)',
          '300': 'var(--grey-300)',
          '400': 'var(--grey-400)',
          '500': 'var(--grey-500)',
          '600': 'var(--grey-600)',
        },
        purple: {
          DEFAULT: 'var(--purple)',
          dark: {
            '100': 'var(--purple-dark-100)',
            '200': 'var(--purple-dark-200)',
            '300': 'var(--purple-dark-300)',
          },
          light: {
            '100': 'var(--purple-light-100)',
            '200': 'var(--purple-light-200)',
            '300': 'var(--purple-light-300)',
          },
        },
        red: 'var(--red)',
      },
    },
  },
  plugins: [],
}
export default config

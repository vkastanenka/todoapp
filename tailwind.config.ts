import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(225deg, #2A2A2E 11%, #2B125A 47%, #000000 85%);',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        purple: {
          DEFAULT: '#3C1F7B',
          dark: '#272430',
        },
      },
    },
  },
  plugins: [],
}
export default config

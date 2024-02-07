import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '36px',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '2xl': '1320px',
      },
      fontSize: {
        '10xl': '8.552rem',
        '11xl': '9.052rem',
        '12xl': '9.552rem',
        '13xl': '10.052rem',
        '14xl': '10.552rem',
      },
      colors: {
        primary: '#243c5a',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        border: 'var(--border)',
        brand: {
          50: '#eefaf8',
          100: '#d7f4ef',
          200: '#ade8dc',
          300: '#7ed9c7',
          400: '#4cbca5',
          500: '#219a83',
          600: '#167967',
          700: '#125f53',
          800: '#104d44',
          900: '#0e4139',
        },
        accent: {
          50: '#fff7ed',
          100: '#feebc8',
          200: '#fbd38d',
          300: '#f6ad55',
          400: '#ed8936',
          500: '#dd6b20',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(20, 78, 69, 0.18)',
      },
      backgroundImage: {
        hero:
          'radial-gradient(circle at top left, rgba(33, 154, 131, 0.22), transparent 32%), radial-gradient(circle at top right, rgba(221, 107, 32, 0.18), transparent 28%), linear-gradient(180deg, #f5fbfa 0%, #ffffff 52%, #f7fbfb 100%)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};

export default config;

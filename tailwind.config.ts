import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { tailwindPreset } from '@repo/ui-tokens';

/*
 * Paleta do site de marketing. Espelha o `theme.js` legado (`../site/theme.js`):
 * remapeia os nomes `sage`/`warm`/`cream`/`slate` para a paleta quente do design
 * system, e expõe `ink`/`bg`/`gold`/`cat`/`border-soft`. Mantido como objeto literal
 * para que o JIT do Tailwind detecte as classes usadas no markup das páginas.
 */
const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  presets: [tailwindPreset as Config],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2D6A4F',
          dark: '#1F4D38',
          light: '#E8F0EA',
          foreground: 'hsl(0 0% 100%)',
        },
        bg: { DEFAULT: '#FAF7F1', warm: '#F5EFE3', card: '#FFFFFF' },
        ink: { DEFAULT: '#1A2E26', soft: '#4A5B53', muted: '#8B9A92' },
        gold: { DEFAULT: '#C68B3A', light: '#FDF4E3' },
        'border-soft': '#F0EBDD',
        cat: {
          familia: '#B8556B',
          'familia-bg': '#FBEEF1',
          infancia: '#C68B3A',
          'infancia-bg': '#FDF4E3',
          trabalho: '#4A7A9E',
          'trabalho-bg': '#EBF2F8',
        },
        sage: {
          50: '#F3F8F5',
          100: '#E8F0EA',
          200: '#CBE0D2',
          300: '#9CBFA8',
          400: '#4E8A6A',
          500: '#2D6A4F',
          600: '#235741',
          700: '#1F4D38',
          800: '#1A2E26',
          900: '#13211A',
        },
        warm: {
          50: '#FDF4E3',
          100: '#F5EFE3',
          200: '#F0EBDD',
          300: '#E9D6A8',
          400: '#D4A857',
          500: '#C68B3A',
        },
        cream: '#FAF7F1',
        slate: {
          50: '#FAF7F1',
          100: '#F0EBDD',
          200: '#E4DCC9',
          300: '#C9C2B0',
          400: '#8B9A92',
          500: '#6B7A72',
          600: '#4A5B53',
          700: '#34433C',
          800: '#1A2E26',
          900: '#11201A',
        },
      },
      borderRadius: { card: '14px' },
      boxShadow: {
        soft: '0 1px 2px rgba(26,46,36,0.03)',
        lift: '0 1px 3px rgba(26,46,36,0.06)',
        card: '0 10px 30px rgba(26,46,36,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

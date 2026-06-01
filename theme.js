/*
 * Tema visual compartilhado do site Vale das Memórias.
 *
 * Espelha os tokens do design system do monorepo `everything`
 * (packages/ui-tokens/src/globals.css + tailwind-preset.ts):
 *   fundo creme #FAF7F1, verde primário #2D6A4F, títulos serifados (Fraunces).
 *
 * Carregar SEMPRE depois do CDN do Tailwind:
 *   <script src="https://cdn.tailwindcss.com"></script>
 *   <script src="/theme.js"></script>
 *
 * Os nomes legados (sage / warm / cream) são remapeados para a nova paleta,
 * então o markup antigo adota o novo visual automaticamente.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // ── Tokens do design system ──────────────────────────────────────
        bg: {
          DEFAULT: '#FAF7F1', // --bg
          warm: '#F5EFE3', // --bg-warm
          card: '#FFFFFF', // --bg-card
        },
        ink: {
          DEFAULT: '#1A2E26', // --ink
          soft: '#4A5B53', // --ink-soft
          muted: '#8B9A92', // --ink-muted
        },
        primary: {
          DEFAULT: '#2D6A4F', // --primary
          dark: '#1F4D38', // --primary-dark
          light: '#E8F0EA', // --primary-light
        },
        gold: {
          DEFAULT: '#C68B3A', // acento dourado (categoria infância)
          light: '#FDF4E3',
        },
        'border-soft': '#F0EBDD', // --border-soft
        cat: {
          familia: '#B8556B',
          'familia-bg': '#FBEEF1',
          infancia: '#C68B3A',
          'infancia-bg': '#FDF4E3',
          trabalho: '#4A7A9E',
          'trabalho-bg': '#EBF2F8',
        },

        // ── Remap dos nomes legados para a nova paleta ───────────────────
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
        // Texto/bordas: tons de cinza esverdeado (ink) no lugar do slate frio.
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Lora', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '14px',
      },
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};

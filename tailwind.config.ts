import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050508',
        'bg-secondary': '#0C0C12',
        'bg-elevated': '#12121C',
        'accent-primary': '#6C3AFF',
        'accent-glow': '#8B5CF6',
        'text-primary': '#F5F5F7',
        'text-secondary': '#A1A1AA',
        'text-muted': '#52525B',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-hover': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
        wide: '1440px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6C3AFF 0%, #3B82F6 100%)',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(108,58,255,0.15) 0%, transparent 60%)',
        'card-glow':
          'radial-gradient(ellipse at top, rgba(108,58,255,0.08) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s var(--ease-out-expo) forwards',
        'slide-up': 'slideUp 0.8s var(--ease-out-expo) forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-indicator': 'scrollBounce 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108,58,255,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(108,58,255,0.6)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}

export default config

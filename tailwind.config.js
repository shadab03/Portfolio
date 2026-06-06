/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        bg:       '#050c1a',
        surface:  '#0d1628',
        surface2: '#111d35',
        border:   'rgba(255,255,255,0.07)',
        blue:     '#3b82f6',
        'blue-dim':'#1d4ed8',
        cyan:     '#22d3ee',
        gold:     '#f59e0b',
        dim:      '#64748b',
        mid:      '#94a3b8',
      },
      animation: {
        ticker:    'ticker 30s linear infinite',
        fadeUp:    'fadeUp 0.7s ease forwards',
        fadeIn:    'fadeIn 0.7s ease forwards',
        pulse2:    'pulse2 2s ease infinite',
        scrollDown:'scrollDown 1.5s ease infinite',
      },
      keyframes: {
        ticker:    { from:{ transform:'translateX(0)' }, to:{ transform:'translateX(-50%)' } },
        fadeUp:    { from:{ opacity:0, transform:'translateY(24px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:0 }, to:{ opacity:1 } },
        pulse2:    { '0%,100%':{ opacity:1 }, '50%':{ opacity:0.3 } },
        scrollDown:{ '0%':{ transform:'translateY(-100%)' }, '100%':{ transform:'translateY(250%)' } },
      },
    },
  },
  plugins: [],
}

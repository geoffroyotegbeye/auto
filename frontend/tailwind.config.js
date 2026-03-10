/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vm-bg': '#0D0D0D',
        'vm-bg-2': '#141414',
        'vm-card': '#1A1A1A',
        'vm-elevated': '#222222',
        'vm-text': '#F5F0E8',
        'vm-muted': '#A09A8E',
        'vm-dim': '#5A5550',
        'vm-accent': '#E8A020',
        'vm-accent-light': '#F0B840',
        'vm-border': 'rgba(245, 240, 232, 0.08)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.4em',
      },
      animation: {
        'marquee': 'marquee-scroll 28s linear infinite',
        'float': 'float-gentle 6s ease-in-out infinite',
        'float-2': 'float-gentle-2 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(245,240,232,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,232,0.02) 1px, transparent 1px)",
        'hero-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1a1208 40%, #0D0D0D 100%)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
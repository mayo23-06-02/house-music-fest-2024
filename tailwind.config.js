/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        platelet: ['Platelet'],
        sans: ['var(--font-poppins)'],
      }
    },
    colors: {
      white:'#FFFFFF',
      black: '#000000',
      primary:'#fd950e',
      red: '#901200',
      text_primary: '#2C1607',
      secondary: '#F6E5DB',
      gray: '#F6E5DB',
      gray2: '#F0D3C2',
      gray3: '#F3DCCE',
      light_gray: '#FCFCFC',
      skillshub_yellow: "#FFD726",
      skillshub_light_blue: "#00C9F2",
      skillshub_red:"#FF6242",
      green: "#22c55e",
      realistic: "#FF380F",
      investigative: "#E9C93C",
      artistic: "#18B9DA",
      social: "#AAB1BA",
      enterprising: "#4865A4",
      conventional: "#F6AE9F"
    },
    animation: {
      'spin-slow': 'spin 15s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
    }

  },
  plugins: [],
}

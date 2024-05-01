/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./dashboard/editor/components/surfaces/**/*.{js,ts,jsx,tsx}",
    "./dashboard/editor/components/builtInComponent/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#788293",
        "body-color-dark": "#959CB1",
        "gray-dark": "#1E232E",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        "stroke-dark": "#353943",
        "bg-color-dark": "#171C28",
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      keyframes: {
        // Existing keyframes...
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceInUp: {
          '0%': { opacity: '0', transform: 'translateY(2000px)' },
          '60%': { opacity: '1', transform: 'translateY(-30px)' },
          '80%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceInDown: {
          '0%': { opacity: '0', transform: 'translateY(-2000px)' },
          '60%': { opacity: '1', transform: 'translateY(30px)' },
          '80%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-2000px)' },
          '60%': { opacity: '1', transform: 'translateX(30px)' },
          '80%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceInRight: {
          '0%': { opacity: '0', transform: 'translateX(2000px)' },
          '60%': { opacity: '1', transform: 'translateX(-30px)' },
          '80%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        rotateInUpLeft: {
          '0%': { opacity: '0', transform: 'rotate(-90deg) translateX(-1000px) translateY(-1000px)' },
          '100%': { opacity: '1', transform: 'rotate(0) translateX(0) translateY(0)' },
        },
        rotateInUpRight: {
          '0%': { opacity: '0', transform: 'rotate(90deg) translateX(1000px) translateY(-1000px)' },
          '100%': { opacity: '1', transform: 'rotate(0) translateX(0) translateY(0)' },
        },
        rotateInDownLeft: {
          '0%': { opacity: '0', transform: 'rotate(90deg) translateX(-1000px) translateY(1000px)' },
          '100%': { opacity: '1', transform: 'rotate(0) translateX(0) translateY(0)' },
        },
        rotateInDownRight: {
          '0%': { opacity: '0', transform: 'rotate(-90deg) translateX(1000px) translateY(1000px)' },
          '100%': { opacity: '1', transform: 'rotate(0) translateX(0) translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Add other keyframes here
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Add other keyframes here
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-200deg)' },
          '100%': { opacity: '1', transform: 'rotate(0)' },
        },
        // Add other keyframes here
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Add other keyframes here
        flipInX: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateX(90deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateX(0)' },
        },
        // Add other keyframes here
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        // Add other keyframes here
        jello: {
          '0%': { transform: 'scale(1,1)' },
          '30%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
          '40%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
          '50%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
          '60%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
          '70%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
          '80%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
          '90%': { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' },
          '100%': { transform: 'skewX(0deg) skewY(0deg)' },
        },
        // Add other keyframes here
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        // Add other animations here
        slideInUp: 'slideInUp 1s ease-out',
        // Add other animations here
        rotateIn: 'rotateIn 1s ease-out',
        // Add other animations here
        zoomIn: 'zoomIn 1s ease-out',
        // Add other animations here
        flipInX: 'flipInX 1s ease-out',
        // Add other animations here
        heartBeat: 'heartBeat 1s infinite',
        // Add other animations here
        jello: 'jello 1s infinite',
        // Add other animations here
        pulse: 'pulse 1s infinite',
        // Add other animations here
        // Existing animations...
        bounceIn: 'bounceIn 5s ease-out',
        bounceInUp: 'bounceInUp 1s ease-out',
        bounceInDown: 'bounceInDown 1s ease-out',
        bounceInLeft: 'bounceInLeft 1s ease-out',
        bounceInRight: 'bounceInRight 1s ease-out',
        rotateInUpLeft: 'rotateInUpLeft 1s ease-out',
        rotateInUpRight: 'rotateInUpRight 1s ease-out',
        rotateInDownLeft: 'rotateInDownLeft 1s ease-out',
        rotateInDownRight: 'rotateInDownRight 1s ease-out',
      },
    },
  },
  plugins: [],
};

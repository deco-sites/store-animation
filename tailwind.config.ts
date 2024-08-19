import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        teste: '180ms cubic-bezier(0.4, 0, 1, 1) both fadeOut, 600ms cubic-bezier(0.4, 0, 0.2, 1) both slideToLeft',
        teste2: 'slideFromRight 1s ease-in-out infinite',
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          "from": { opacity: 0 }
        },
     
        fadeOut: {
          "to": { opacity: 0 }
        },
     
        slideFromRight: {
          "from": { transform: "translateX(90px)" }
        },
     
        slideToLeft: {
          "to": { transform: "translateX(-90px)" }
        },
      },
    },
  },
};

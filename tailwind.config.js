// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'gradient': 'gradient 8s linear infinite',
//         'float': 'float 6s ease-in-out infinite',
//         'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
//       },
//       keyframes: {
//         gradient: {
//           '0%, 100%': {
//             'background-size': '200% 200%',
//             'background-position': 'left center'
//           },
//           '50%': {
//             'background-size': '200% 200%',
//             'background-position': 'right center'
//           }
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' }
//         },
//         'pulse-glow': {
//           '0%, 100%': { opacity: 1 },
//           '50%': { opacity: 0.5 }
//         }
//       }
//     }
//   }
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",     // blue-500
        secondary: "#38bdf8",   // blue-400
        darkBg: "#020617",      // slate-950
      },

      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },

      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },

        "pulse-glow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },

      boxShadow: {
        glow: "0 0 25px rgba(56, 189, 248, 0.6)",
      },
    },
  },

  plugins: [],
};

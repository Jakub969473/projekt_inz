module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,js, vue}",
    "./inertia/**/*.{html,js, vue}"
  ],
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./inertia/**/*.{html,js, vue}"
  ],
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

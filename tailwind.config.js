module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      boxshadow:{
       '3xl': '0px 4px 16px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
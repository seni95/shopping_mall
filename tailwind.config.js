/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        brand:'#1a237e',
        white:'#fff'
      },
      backgroundImage:{
        banner:`url("https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")`
      }
    },
  },
  plugins: [],
}

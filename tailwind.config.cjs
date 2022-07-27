module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'branco-txt': '#FFFFFF',
        'azul-bg': '#151A3F',
        'cinza-bt':'#707070',
        'azul-h1': '#478AFF',
        'azul-placeholder':'#2F416B',
        'azul-label':'#050941',
        'azul-submit':'#030524',
        'amarelo':'#FFBF2F',
    },
      fontFamily:{
        principal : ['Source Serif Pro'],
        secundaria: ['Open Sans']
      } }
  },
  plugins: []
};

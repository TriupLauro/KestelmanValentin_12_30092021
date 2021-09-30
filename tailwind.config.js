module.exports = {
  purge: ['.index.html', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        highlight : '#FF0000',
        'light' : '#FBFBFB',
        'subdued' : '#74798C',
        'proteins' : '#4AB8FF10',
        'carbs' : '#F9CE2310',
        'lipids' : '#FD518110',
          'calories' : '#FF000010'

},
      spacing : {
        't-dboard' : '4.25rem',
        'l-dboard' : '6.75rem',
        't-record' : '2.5rem',
        't-main' : '4.875rem'
      },
      fontSize: {
        md : '1.5rem',
        sm : '0.75rem',
        'nutri-value' : '1.25rem'
      },
      height: {
        md: '5.625rem',
        full : '100%',
        'nutri-bg' : '7.75rem',
          'nutri-icon' : '3.75rem'
      },
      lineHeight: {
        'top-nav': '5.625rem'
      },
      width : {
        'left-bar': '7.375rem',
        'nutri-bg' : '16.25rem',
          'nutri-icon' : '3.75rem'
      },
      margin : {
        '-v-bar' : '-5.625rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

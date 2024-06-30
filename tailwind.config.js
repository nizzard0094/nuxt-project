module.exports = {
    theme: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      extend: {
        maxWidth: {
          sm: `${540 / 16}rem`,
          md: `${720 / 16}rem`,
          lg: `${960 / 16}rem`,
          xl: `${1140 / 16}rem`,
          xxl: `${1320 / 16}rem`,
        }
      },
    },
    plugins: [],
  }
  
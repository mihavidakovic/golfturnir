module.exports = {
  purge: false,
  theme: {
    extend: {},
    width: (theme) => ({
      ...theme('spacing'),
      'container': '1120px',
    }),
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1120px',
        xl: '1120px',
        '2xl': '1120px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

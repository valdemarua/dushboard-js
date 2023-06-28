export const themeConfig = {
  palette: {
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: "#ed6c02",
    },
  },
  // typography: {
  //   fontSize: 15,
  //   h3: {
  //     fontSize: "1.20rem",
  //     fontWeight: 500,
  //     marginTop: "1rem",
  //     marginBottom: "1rem",
  //   },
  // },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    }
  }
}

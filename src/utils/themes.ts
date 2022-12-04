export const THEMES = {
  light: {
    leftBackground: "#cecece",
    rightBackground: "white",
    font: {
      leftColor: "#2f4f4f",
      rightColor: "#000000",
    },
    token: {
      colorPrimary: "#cc0000",
      colorFillTertiary: 'pink',
      colorTextLightSolid: 'white',
    },
  },
  dark: {
    // the left backgroundColor in the test order was 'white' but that made no sense and had really
    // no contrast with the buttons color so i opted to change it
    leftBackground: "darkblue",
    rightBackground: "#008080",
    font: {
      leftColor: "#696969",
      rightColor: "white",
    },
    token: {
      colorPrimary: "#f0f8ff",
      colorFillTertiary: 'lightgreen',
      colorTextLightSolid: '#800080',
    },
  },
};


const text = {
  m: "0px 0 12px 0",
  fontFamily: "century gothic !important",
};

export default {
  breakpoints: ["310px", "540px", "990px", "1200px", "1650px"],

  colors: {
    primary: "#006bad", //primary Blue color of Netart
    secondary: "#cb0f22", //secondary red color of Netart
    light: "#f9f9f9", //light white color
    menuBlue: "#021bdd", // blue menu color
    darkGray: "#222222",   
    background: "black",
    footerBlue: "#152230", // footer blue color
    menuMb: "#263444", //dark gray of menu in mobile
    templateGray:"#111",
    templatePrimary:"#00D6FF",
    netartBlue:"#006bad"
  },
  fonts: {
    body: "Poppins, sans-serif",
    monospace: "Poppins, sans-serif",
    heading: "century gothic",
    spanText: "Fira Sans, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    root: {
      margin: "0px",
    },
    h1: {
      fontSize: [null, 35,45, 55],
      // fontSize: [null, 30,49, 70],
      fontWeight: "900",
      lineHeight: [null, "40px", "55px", "65px"],
      textTransform:"uppercase",
      ...text,
    },
    h2: {
      fontSize: [null, 32,38],
      // fontSize: [null, 28,null,null, 50],
      fontWeight: "900",
      lineHeight: 1.25,
      ...text,
    },
    h3: {
      fontSize: 25,
      // fontSize: [null, 26,null,null,,26],
      fontWeight: "900",
      ...text,
    },
    h4: {
      fontSize: 22,
      // fontSize: [null,24,null,null,24],
      ...text,
    },
    p: {
      fontSize: 16,
      // fontSize: [null, 16, null, null,18, 20],
      fontFamily: "Poppins, sans-serif !important",
      m: "0px 0 5px 0",
      lineHeight: "22px",
    },
    span: {
      fontFamily: "Poppins, sans-serif !important",
      m: "0px 0 5px 0",
      fontSize: 18,
    },
    button: {},
    a: {
      fontSize: [null, 12, 14, 14, 14, 18],
      fontFamily: "Poppins, sans-serif !important",
    },
  },
};

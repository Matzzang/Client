const colors = {
  main_purple: '#503396',

};

function FONT({ weight, size, lineHeight }) {
  return `
      font-family: 'NanumBarunGothic';
      font-weight: ${weight};
      font-size: ${size}rem;
      line-height: ${lineHeight}%;
    `;
}

const fonts = {
  headline1: FONT({ weight: 400, size: 3, lineHeight: 110 }),

};

const theme = {
  colors,
  fonts,
};

export default theme;
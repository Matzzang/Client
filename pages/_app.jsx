import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyle";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

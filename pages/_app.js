import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../components/layout";
import "../styles/theme.css";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({});

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

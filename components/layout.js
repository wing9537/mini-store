import Head from "next/head";
import TopNav from "./topNav";
import { Container } from "@mui/material";

function Footer() {
  return <footer>Powered by Tommy Kwok</footer>;
}

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>mini-store</title>
        <meta name="description" content="React simple form" />
      </Head>
      <TopNav />
      <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;

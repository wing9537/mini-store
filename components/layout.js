import Head from "next/head";
import TopNav from "./topNav";
import { Container } from "@mui/material";

function Footer() {
  return (
    <footer>
      <div>Powered by Tommy Kwok</div>
      <a href="https://github.com/wing9537/mini-store/" target="_blank" rel="noreferrer">
        Visit to GitHub
      </a>
    </footer>
  );
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

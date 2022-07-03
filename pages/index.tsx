import Container from "components/Container";
import Prose from "components/Prose";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bit like this</title>
        <meta name="description" content="bit like this dot com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Prose>
            <h1>Home</h1>
            <p>Hello! Welcome to <b>bit like this</b>.</p>
          </Prose>
        </Container>
      </main>
    </div>
  );
};

export default Home;

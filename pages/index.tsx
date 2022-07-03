import Container from "components/Container";
import Prose from "components/Prose";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>bitlikethis</title>
        <meta name="description" content="bit like this dot com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Prose>
            <h1>bit like this</h1>
            <pre>
              <code>const something = 'something';</code>
            </pre>
            <code>const something = 'something';</code>
          </Prose>
        </Container>
      </main>
    </div>
  );
};

export default Home;

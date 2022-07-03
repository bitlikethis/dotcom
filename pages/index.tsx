import Container from "components/Container";
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

      <main className="text-2xl">
        <Container>bitlikethis</Container>
      </main>
    </div>
  );
};

export default Home;

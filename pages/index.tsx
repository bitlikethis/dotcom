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

      <main className="text-2xl">bitlikethis</main>
    </div>
  );
};

export default Home;

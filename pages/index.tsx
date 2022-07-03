import Container from "components/Container";
import Prose from "components/Prose";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
            <p>
              Hello! Welcome to{" "}
              <a>
                <b>bit like this</b>
              </a>
              . My name is Corey, and I like to try new things. I have a
              curiosity for programming, tech, and art. Take a look at my latest{" "}
              <Link href="/projects">
                <a>projects</a>
              </Link>
              . You can catch my progress on{" "}
              <Link href="https://www.youtube.com/channel/UCIUrN4s3vexpbOl-KMqUmqg">
                <a>Youtube</a>
              </Link>
              .
            </p>
          </Prose>
        </Container>
      </main>
    </div>
  );
};

export default Home;

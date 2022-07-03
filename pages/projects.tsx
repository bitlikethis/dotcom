import Container from "components/Container";
import Prose from "components/Prose";
import type { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <div>
      <main className="text-2xl">
        <Container>
          <Prose>
            <h1>Projects</h1>
            <p>
              Hello! Welcome to <b>bit like this</b>.
            </p>
          </Prose>
        </Container>
      </main>
    </div>
  );
};

export default Projects;

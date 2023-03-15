import Section from "../Util/Section";
import Row from "../Util/Row";
import {
  projectsDiv,
  projectsRow,
} from "../../stylesheets/components/Section/Projects.module.sass";
import ProjectCard from "../ProjectCard";

const projects = require("../../data/projects.json");

const Projects = () => (
  <Section>
    <div className={projectsDiv}>
      <Row className={projectsRow}>
        {projects.projectList.map((project) => (
          <ProjectCard
            imageLink={project.imageLink}
            imageAlt={project.imageAlt}
            title={project.title}
            subtitle={project.subtitle}
            text={project.text}
            blogPost={project.blogPost}
            key={project.title}
          />
        ))}
      </Row>
    </div>
  </Section>
);

export default Projects;

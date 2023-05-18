import projectData from "./projectsData.json";
import projectData1 from "./projectsData1.json";
import projectData2 from "./projectsData2.json";
import Project from "../../components/Project";

import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        
        description={project.description}
      />
    ));
    const ProjectList1 = () =>
    projectData1.map((project, i) => (
      <Project
        key={i}
        iid={project.iid}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        
        description={project.description}
      />
    ));
    const ProjectList2 = () =>
    projectData2.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        
        description={project.description}
      />
    ));
  return (
    <section className="portfolio">
      <PageHeader title="Education" description="View my work" />
      <div className="row">
        <ProjectList />
      </div>
      <PageHeader title="Certicication" description="View my work" />
      <div className="row">
        <ProjectList1 />
      </div>
      <PageHeader title="Project" description="View my work" />
      <div className="row">
        <ProjectList2 />
      </div>
    </section>
  );
};

export default Portfolio;

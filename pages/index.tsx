import { GetStaticProps } from "next";
import styled from "styled-components";
import { IProjectsProps } from "./projects";
import { Project } from "../components/Containers";
import { Hero, PageLayout } from "../components/sections";
import { getShowcaseProjects } from "../utils/projectsUtils";
import { media } from "../utils";

export default function Home({ projects }: IProjectsProps) {
  return (
    <PageLayout>
      <Wrapper>
        <Hero />
        <h1>Showcase Projects</h1>
        <ProjectsWrapper>
          {projects.map(project => (
              <Project 
                key={project.slug}
                slug={project.slug}
                priority={project.priority}
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                tags={project.tags}
                images={project.images}
                links={project.links}
                showcase={project.showcase}
                achievements={project.achievements}
            />
          ))}
        </ProjectsWrapper>
      </Wrapper>
    </PageLayout>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getShowcaseProjects([
      "slug",
      "thumbnail",
      "title",
      "description",
      "subtitle",
      "tags",
      "images",
      "links",
      "priority",
      "achievements"
  ]);

  return { props: { projects } };
};

const Wrapper = styled.div`
  padding: 0 40px;

  h1 {
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    ${({ theme }) => `
        font-family: ${theme.font.header};
    `};
    ${media(
        "half_laptop",
        `
            font-size: 40px;
            `
    )};
  }
`;
const ProjectsWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-bottom: 40px;
`;

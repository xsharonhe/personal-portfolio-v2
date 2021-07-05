import { GetStaticProps } from "next";
import styled from "styled-components";
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';

import { IProjectsProps } from "./projects";
import { Project } from "../components/Containers";
import { Button } from "../components/Inputs";
import { Highlight } from "../components/Texts";
import { Hero, PageLayout } from "../components/sections";
import { getShowcaseProjects } from "../utils/projectsUtils";
import { media, CONSTANTS } from "../utils";

const ICONS_LIST = [
  {
      icon: Linkedin,
      link: CONSTANTS.linkedin
  },
  {
      icon: Github,
      link: CONSTANTS.github
  },
];

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
        <ConnectWrapper>
          <h2>Let&apos;s Connect!</h2>
          <p>
            I&apos;m always interested in new opportunities and working with new people. 
            Be it a quick chat or asking questions you have, feel free to reach out.
          </p>
          <p><b>Oh!</b> I&apos;m also active on</p>
          <IconsWrapper>
              {ICONS_LIST.map((icon, i) => (
                  <a key={`link__${i}`} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <SIcon key={`icon__${i}`} as={icon.icon}/>
                  </a>
              ))}
          </IconsWrapper>
          <ResumeWrapper> 
              <h2>
                  <SHighlight>
                    Download My Resume?
                  </SHighlight>
              </h2>
              <a
                    href="/SharonHe_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <Button>
                      Take a copy.
                </Button>
              </a>
            </ResumeWrapper>
        </ConnectWrapper>
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
  padding: 0 40px 60px 0;

  h1, h2 {
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
  ${media(
        "tablet",
        `
            width: 80%;
            `
    )};
`;
const ConnectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    margin: auto;
    text-align: center;
    width: 60%;
`;
const IconsWrapper = styled.div`
    text-align: center;
    ${({ theme }) => `
        ${media(
          "mobile",
          `
            display: flex;
            flex-direction: column;
            align-items: center;
          `
        )};
    `};
`;
const SIcon = styled.svg`
    height: 60px;
    width: 60px;
    margin: 0 20px;
    display: inline-block;
    ${({ theme }) => `
        :focus
        :hover {
            fill: ${theme.colors.primary};
            opacity: 0.75;
        }
        ${media(
          "mobile",
          `
            margin: 10px 0;
          `
        )};
    `};
`;
const ResumeWrapper = styled.div`
    padding-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    margin: auto;
    text-align: center;

    h2 {
      font-size: 32px;
      ${media(
        "tablet",
        `
            font-size: 24px;
            `
      )}; 
    }

    a {
      margin: auto;
    }

    button {
      color: white;
      :hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in;
      }
    }
`;
const SHighlight = styled(Highlight)`
  :hover {
    color: black;
    cursor: auto;
  }
`;

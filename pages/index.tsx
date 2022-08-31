import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';

import { Highlight } from "../components/Texts";
import Profile from "../public/profile-1.png";
import { Project } from "../components/Containers";
import { Button } from "../components/Inputs";
import { Hero, PageLayout } from "../components/sections";
import { getShowcaseProjects } from "../utils/projectsUtils";
import { media, CONSTANTS } from "../utils";
import { IProjectProps } from "../components/Containers/Project";

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

interface IHomeProps {
  projects: IProjectProps[];
}

export default function Home({ projects }: IHomeProps) {
  return (
    <PageLayout>
      <Wrapper>
        <Hero />
        <ExperiencesWrapper>
          <SectionWrapper>
              <div>
                <h1>About Me</h1>
              </div>
              <HWrapper>
                <Button>
                  <Link href="/experiences">
                    <a> 
                      See all experiences
                    </a>
                  </Link>
                </Button>
              </HWrapper>
          </SectionWrapper>
          <UpperHeading>
              <Image
                  src={Profile}
                  alt="Profile"
                  width={490}
                  height={350}
              />
              <Content>
                  <p>
                      At heart, I am a problem-solver. As a kid, I loved to solve
                      puzzles (hence why this website&apos;s theme is puzzles),
                      whether it be a sudoku puzzle, a rubix cube, or a counting problem.
                      That&apos;s why I love building software. I believe in 
                      its ability to develop the creative solutions for complex issues our
                      society faces.
                  </p>
                  <p>
                  {"I've recently interned as a software engineer at "}
                  <a
                      href="https://www.kiavi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Highlight>
                          Kiavi
                      </Highlight>
                  </a>
                  {" and worked on designing APIs and microservices, and building their new event-sourcing platform. "}
                  {" My projects focused on how to more efficiently retrieve and store data to help automate financial decisions, "}
                  {" and researching and building internal tooling for configuring and monitoring services. "}
                  {"I've also interned as a software developer at "}
                  <a
                      href="https://geotab.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Highlight>
                          Geotab
                      </Highlight>
                  </a>
                  {" working on their fleet management solutions and data pipelines. See more about my experiences "}
                  <Link href="/experiences">
                      <a>
                          <Highlight>
                              here
                          </Highlight>
                      </a>
                  </Link>
                  {"."}
              </p>
              </Content>
          </UpperHeading>
          <MoreContent>
            <p>
                {"These days, I spend my time learning about infastructure, "}
                <a
                    href="https://www.databass.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Highlight>
                        database internals
                    </Highlight> 
                </a>
                {", "}
                <a
                    href="https://dataintensive.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Highlight>
                        building data intensive applications
                    </Highlight>
                </a>
                {", and financial markets. "}
                {"In my free time, I help teach elementary and high school students how to code as "}
                {"the Head of Tech at "}
                <a
                    href="https://pumprofessionals.org/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <Highlight>
                        PuMP
                    </Highlight>
                </a>
                {". I am leading the engineering process of "}
                <Link href="/wip/#pump-in-progress">
                    <a>
                        <Highlight>
                            redesigning their website
                        </Highlight>
                    </a>
                </Link>
                {" from scratch."}
            </p>
              <p>
                  More about this website? See&nbsp;
                      <Link href="/projects/personal-portfolio-v2">
                          <a>
                              <Highlight>
                                  Building A Portfolio
                              </Highlight>
                          </a>
                      </Link>
                  .
              </p>
          </MoreContent>
        </ExperiencesWrapper>
        <SectionWrapper>
            <div>
              <h1>Showcase Projects</h1>
            </div>
            <HWrapper>
              <div>
                <Button>
                  <Link href="/projects">
                    <a> 
                      See all projects
                    </a>
                  </Link>
                </Button>
              </div>
            </HWrapper>
        </SectionWrapper>
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
                achievements={project.achievements}
                captions={project.captions}
                label={project.label}
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
          {/* <ResumeWrapper> 
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
            </ResumeWrapper> */}
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
  ${media(
        "tablet",
        `
            margin: auto;
            padding: 0 10px 60px 10px;
            `
    )};

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
const UpperHeading = styled.div`
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${media(
        `tablet`,
        `
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `
    )};
`;
const MoreContent = styled.div`
    text-align: left;
    padding: 0 5%;
`;
const Content = styled.div`
    padding-right: 40px;
    width: 60%;
    line-height: 1.4;
    ${media(
        `tablet`,
        `
            padding-right: 0;
            width: 100%;
        `
    )};
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 3%;
  ${media(
    600,
    `
        justify-content: center;
        flex-direction: column;
      `
)};
`
const HWrapper = styled.div`
  margin: 0 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    ${media(
      600,
      `
          margin: auto;
        `
    )};
  }
  a {
    color: white;
  }
`;
const ExperiencesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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

    a {
      ${({ theme }) => `
        :hover {
            color: ${theme.colors.primary};
            transition: all 0.8s ease;
        }
    `};
    }

    ${media(
        "mobile",
        `
            display: flex;
            flex-direction: column;
            justify-content: center;

            a {
              margin: 10px 0;
            }
            `
      )}; 
`;
const SIcon = styled.svg`
    height: 60px;
    width: 60px;
    margin: 0 20px;
    display: inline-block;
`;
// const ResumeWrapper = styled.div`
//     padding-top: 40px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;  
//     margin: auto;
//     text-align: center;

//     h2 {
//       font-size: 32px;
//       ${media(
//         "tablet",
//         `
//             font-size: 24px;
//             `
//       )}; 
//     }

//     a {
//       margin: auto;
//     }

//     button {
//       color: white;
//       :hover {
//         transform: scale(1.1);
//         transition: all 0.3s ease-in;
//       }
//     }
// `;
// const SHighlight = styled(Highlight)`
//   :hover {
//     color: black;
//     cursor: auto;
//   }
// `;

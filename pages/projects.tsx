import { GetStaticProps } from "next";
import styled from "styled-components";
import { PageLayout } from "../components/sections";
import { IProjectProps, Project } from "../components/Containers/Project";
import { SProject } from "../components/Containers";
import { getAllProjects } from "../utils/projectsUtils";
import { media } from "../utils";

export interface IProjectsProps extends React.HTMLAttributes<HTMLDivElement>{
    projects: IProjectProps[];
};

export default function Projects({ projects }: IProjectsProps) {
    return (
        <PageLayout title="Projects">
            <Wrapper>
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
            </Wrapper>
        </PageLayout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    const projects = getAllProjects([
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
    width: 60%;
    margin: auto;
    padding: 0 20px 60px 20px;
    ${media(
        1000,
        `
            width: 70%;
        `
    )}
    ${media(
        "tablet",
        `
            width: 80%;
        `
    )}
    ${media(
        "mobile",
        `
            width: 90%;
        `
    )}
`;
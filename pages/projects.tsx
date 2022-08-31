import { GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";
import { PageLayout } from "../components/sections";
import { IProjectProps, Project } from "../components/Containers/Project";
import { getAllProjects } from "../utils/projectsUtils";
import { media } from "../utils";
import { Subtitle } from "../components/Texts";

export interface IProjectsProps extends React.HTMLAttributes<HTMLDivElement>{
    projects: IProjectProps[];
};

export default function Projects({ projects }: IProjectsProps) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="A look inside Sharon He's personal and community projects."
                />
            </Head>
            <PageLayout title="Projects">
                <Wrapper>
                    <Subtitle>
                        A repository of all my personal and collaborative projects,
                        and how I&apos;ve approached them.
                    </Subtitle>
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
                            captions={project.captions}
                            achievements={project.achievements}
                            label={project.label}
                        />
                    ))}
                </Wrapper>
            </PageLayout>
        </>
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
        "captions",
        "priority",
        "achievements",
        "label"
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
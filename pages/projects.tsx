import { GetStaticProps } from "next";
import Link from "next/link";
import { PageLayout } from "../components/sections";
import { IProjectProps, Project } from "../components/Containers/Project";
import { getAllProjects } from "../utils/mdxUtils";

interface IProjectsProps {
    projects: IProjectProps[];
};

export default function Projects({ projects }: IProjectsProps) {
    return (
        <PageLayout title="Projects">
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
                />
            ))}
        </PageLayout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    const projects = getAllProjects([
        "slug",
        "thumbnail",
        "title",
        "description",
        "tags",
        "images",
        "links"
    ]);

    return { props: { projects } };
};

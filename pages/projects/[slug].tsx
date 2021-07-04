import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { IProjectProps } from "../../components/Containers/Project";
import { PageLayout } from "../../components/sections/PageLayout";
import { getProject, getAllProjects } from "../../utils/mdxUtils";

interface IProjectsPageProps {
    source: MDXRemoteSerializeResult;
    frontMatter: Omit<IProjectProps, 'slug'>;
}

const ProjectsPage: React.FC<IProjectsPageProps> = ({   
    source,
    frontMatter
}) => {
    return (
        <PageLayout title={frontMatter.title}>
             <Head>
                <meta
                    name="description"
                    content={frontMatter.description}
                    key="description"
                />
                <meta
                    property="og:description"
                    content={frontMatter.description}
                    key="ogDescription"
                />
            </Head>
            <div>
                <p>{frontMatter.title}</p>
            </div>
        </PageLayout>
    );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data, content } = getProject(params?.slug as string);
  
    const mdxSource = await serialize(content, { scope: data });
  
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllProjects(["slug"]);
  
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));
  
    return {
        paths,
        fallback: false,
    };
  };

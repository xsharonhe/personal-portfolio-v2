import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import styled from "styled-components";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { IProjectProps } from "../../components/Containers/Project";
import { PageLayout } from "../../components/sections/PageLayout";
import { getProject, getAllProjects } from "../../utils/projectsUtils";
import { media } from "../../utils";

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
            <Wrapper>
                <div>
                    <MDXRemote {...source} />
                </div>
            </Wrapper>
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
    const projects = getAllProjects(["slug"]);
  
    const paths = projects.map((project) => ({
        params: {
            slug: project.slug,
        },
    }));
  
    return {
        paths,
        fallback: false,
    };
  };

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 740px;
    height: auto;
    margin: 0 auto;
    position: relative;
    align-content: center;
    padding-bottom: 60px;

    ${media(
        "tablet",
        `
            width: 80%;
            max-width: none;
        `
    )};
    div {
        font-size: 18px;
        color: #656270;
        line-height: 1.4;

        a {
            color: #656270;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(170, 223, 237, 0.5) 20%);
            :hover {
                color: ${props => props.theme.colors.primary};
                cursor: pointer;
                transition: all .2s ease-in-out;
            }
        }

        ol {
            li {
                padding: 0;
                margin: 10px;
            }
        }

        img {
            ${media(
                "mobile",
                `
                    width: 300px;
                `
            )};
            ${media(
                350,
                `
                    width: 250px;
                `
            )};
        }

        figcaption {
            font-style: italic;
            font-size: 15px;
        }
    }
`;

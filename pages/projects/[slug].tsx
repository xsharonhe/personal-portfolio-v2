import { useCallback } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import styled from "styled-components";
import { TerminalFill } from "@styled-icons/bootstrap/TerminalFill";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { IProjectProps } from "../../components/Containers/Project";
import { PageLayout } from "../../components/sections/PageLayout";
import { getProject, getAllProjects } from "../../utils/projectsUtils";
import { media } from "../../utils";

interface IProjectsPageProps {
    source: MDXRemoteSerializeResult;
    frontMatter: Omit<IProjectProps, "slug">;
}

const getShowcaseComponent = (frontMatter: Omit<IProjectProps, "slug">,) => {
    switch(frontMatter.label) {
        case "devpost":
            return (
                <>
                    <div>
                        <h4>github repo:</h4>
                        <a href={`${frontMatter.links[0]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[0]}
                        </a>
                    </div>
                    <div>
                        <h4>devpost:</h4>
                        <a href={`${frontMatter.links[1]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[1]}
                        </a>
                    </div>
                </>
            );
        case "default":
            return (
                <>
                    <div>
                        <h4>www:</h4>
                        <a href={`${frontMatter.links[0]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[0]}
                        </a>
                    </div>
                    <div>
                        <h4>github repo:</h4>
                        <a href={`${frontMatter.links[1]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[1]}
                        </a>
                    </div>
                </>
            )
        case "youtube":
            return (
                <>
                    <div>
                        <h4>github repo:</h4>
                        <a href={`${frontMatter.links[0]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[0]}
                        </a>
                    </div>
                    <div>
                        <h4>youtube demo:</h4>
                        <a href={`${frontMatter.links[1]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[1]}
                        </a>
                    </div>
                </>
            )
        case "docs":
            return (
                <>
                    <div>
                        <h4>github repo:</h4>
                        <a href={`${frontMatter.links[0]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[0]}
                        </a>
                    </div>
                    <div>
                        <h4>report to McKinsey & Co.:</h4>
                        <a href={`${frontMatter.links[1]}`} target="_blank" rel="noopener noreferrer">
                            {frontMatter.captions[1]}
                        </a>
                    </div>
                </>
            )
        default:
            return (
                <></>
            )
    }
}

const ProjectsPage: React.FC<IProjectsPageProps> = ({   
    source,
    frontMatter
}) => {
    return (
        <PageLayout title={frontMatter.title}>
            <Wrapper>
                {frontMatter.links.length > 0 && (
                    <div>
                        <Icon as={TerminalFill} />
                    </div>
                )}
                <Showcase>
                    {getShowcaseComponent(frontMatter)}
                </Showcase>
                <br />
                <h3 style={{ fontWeight: 600 }}>The Process</h3>
                <MDXWrapper>
                    <MDXRemote {...source} />
                </MDXWrapper>
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

const Icon = styled.svg`
    width: 40px;
    height: 40px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 740px;
    height: auto;
    margin: 0 auto;
    align-content: center;
    padding-bottom: 60px;

    ${media(
        "tablet",
        `
            width: 100%;
            max-width: none;
            padding-top: 20px;
            margin: auto;
        `
    )};
`;
const Showcase = styled.div`
    padding-bottom: 40px;
    ${media(
        "tablet",
        `
            margin: auto;
            text-align: center;
            width: 100%;
        `
    )};

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: -35px;
        ${media(
            "tablet",
            `
                padding: 0 20%;
                flex-direction: column;
                margin-bottom: 0;
            `
        )};
    }

    h4 {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        margin-right: 10px;
        ${({ theme }) => `
            font-family: ${theme.font.header};
        `};
        ${media(
            "tablet",
            `
                font-size: 16px;
                margin-bottom: -2px;
                `
        )};
    }


    a {
        font-size: 16px;
        margin-top: 8px;
        color: #656270;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(170, 223, 237, 0.5) 20%);
        :hover {
            color: ${props => props.theme.colors.primary};
            cursor: pointer;
            transition: all .2s ease-in-out;
        }
        ${media(
            "mobile",
            `
                font-size: 16px;
            `
        )};
    }
`;
const MDXWrapper = styled.div`
    font-size: 18px;
    color: #656270;
    line-height: 1.4;
    text-align: justify;

    ${media(
        "tablet",
        `
            padding: 0 25px;
            display: flex;
            justify-content: center;
            margin: auto;
        `
    )};

    code {
        font-family: ${props => props.theme.font.code};
        margin: 0 2px;
        font-size: 14px;
        background-color: ${props => props.theme.colors.grey};
        border-radius: 4px;
        padding: 2px 8px;
    }

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
            "tablet",
            `
                width: 100%;
            `
        )};
    }

    figcaption {
        font-style: italic;
        font-size: 15px;
    }
`;

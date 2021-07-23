import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { PageLayout } from "../components/sections";
import { media } from "../utils";
import { getAllDates, getDate } from "../utils/wipUtils";

interface IDateProps {
    slug: string;
    title: string;
    images?: string[];
    date: string;
    link_caption?: string;
    link?: string;
    link_url?: string;
    content: string;
    icon: string;
}

type IDict = {
    [key: string]: string
}
interface IMarkdownWipProps {
    source: MDXRemoteSerializeResult;
    frontMatter: IDict;
}
interface IWipProps {
    all_dates: IDateProps[];
    contents: IMarkdownWipProps[];
}
export default function wip({
    all_dates,
    contents
}: IWipProps) {
    return (
        <PageLayout title="Work In Progress">
            <Wrapper>
                <ul>
                    {all_dates.map((wip, index) => {
                        const source = contents[index].source;
                        return (
                            <li key={wip.slug}>
                                <Date>
                                    <IconWrapper>
                                        <IconHolder>
                                            <Image
                                                src={wip.icon}
                                                alt={`${wip.slug}__icon`}
                                                width={60}
                                                height={60}
                                            />
                                        </IconHolder>
                                    </IconWrapper>
                                    <Content id={wip.slug}>
                                        <h2>{wip.title}</h2>
                                        <span>{wip.date}</span>
                                        <div>
                                            <MDXRemote {...source} />
                                        </div>
                                        {!!wip.link && (
                                            <div>
                                                <p>{wip.link_caption}</p>
                                                <Link href={wip.link}>
                                                    <a>
                                                        {wip.link_url}
                                                    </a>
                                                </Link>
                                            </div>
                                        )}
                                    </Content>
                                </Date>
                            </li>
                        )
                    })}
                </ul>
            </Wrapper>
        </PageLayout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    const all_dates = getAllDates([
        "slug",
        "title",
        "images",
        "date",
        "link",
        "link_caption",
        "link_url",
        "icon",
        "content"
    ]);

    let contents: IMarkdownWipProps[] = [];
    for (const item of all_dates) {
        let { data, content } = getDate(item?.slug as string);
        let mdxSource = await serialize(content, { scope: data });
        contents.push({
            source: mdxSource,
            frontMatter: data
        });
    }

    return { props: { all_dates, contents } };
};

const Content = styled.div`
    padding: 0 0 5em 1em;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
    flex: 1;
    flex-basis: auto;
    -webkit-flex: 1;
    ${media(
        "tablet",
        `
            padding-right: 25px;
            margin-left: -15px;
        `
    )}

    h2 {
        margin-top: .15em;
        font-size: 34px;
        line-height: 120%;
        color: black;
        letter-spacing: -1px;
        ${media(
            "tablet",
            `
                font-size: 24px;
            `
        )}
    }

    span {
        margin-top: -20px;
        font-size: 16px;
        ${({ theme }) => `
            color: #AAAAAA;
        `}
        ${media(
            "tablet",
            `
                margin-top: -5px;
            `
        )}
    }

    div {
        font-size: 20px;

        ${media(
        600,
        `
            font-size: 16px;
        `
        )};
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
    }
`;
const IconHolder = styled.div`
    margin-right: 20px;
    position: relative;
    z-index: 10;
    bottom: 10px;
`;
const IconWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
    
    ::before {
        content: "";
        width: 3px;
        height: 100%;
        z-index: 1;
        position: absolute;
        left: 40%;
        top: 0;
        transform: translate3d(-50%, 0, 0);
        background-color: black;
    }

    ${media(
        600,
        `
            ::before {
                display: none;
            }
        `
    )};
`;
const Date = styled.div`
    display: flex;
    align-items: stretch!important;
    box-sizing: border-box;
    justify-content: space-between;
    ${media(
        600,
        `
            flex-direction: column;
            :first-child {
                margin-top: 40px;
            }
        `
    )}
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 740px;
    height: auto;
    margin: 0 auto;
    position: relative;

    ul {
        list-style: none;

        li {
            padding: 20px;
            margin-bottom: 100px;

            ${media(
                600,
                `
                    padding: 5px;
                    margin-bottom: 60px;
                `
            )}

            p {
                line-height: 1.5;
                text-align: justify;
            }
            
            :last-child {
                margin-bottom: 60px;
            }
        }
    }
    ${media(
        600,
        `
            width: 100%;
            max-width: none;
        `
    )}
`;

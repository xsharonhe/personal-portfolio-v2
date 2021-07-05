import { GetStaticProps } from "next";
import Image from "next/image";
import styled from "styled-components";

import { PageLayout } from "../components/sections";
import { media } from "../utils";
import { getAllDates } from "../utils/wipUtils";

interface IDateProps {
    slug: string;
    title: string;
    images?: string[];
    date: string;
    links?: string[];
    content: string;
    icon: string;
}
interface IWipProps {
    data: IDateProps[];
}
export default function wip({
    data
}: IWipProps) {
    console.log(data);
    return (
        <PageLayout title="WIP">
            <Wrapper>
                <ul>
                    {data.map(wip => (
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
                                <Content>
                                    <h2>{wip.title}</h2>
                                    <span>{wip.date}</span>
                                    <p>{wip.content}</p>
                                </Content>
                            </Date>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </PageLayout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    const data = getAllDates([
        "slug",
        "title",
        "images",
        "date",
        "links",
        "icon",
        "content"
    ]);

    return { props: { data } };
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

    p {
        font-size: 20px;
        color: #656270;
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
`;
const Date = styled.div`
    display: flex;
    align-items: stretch!important;
    box-sizing: border-box;
    justify-content: space-between;
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
                "tablet",
                `
                    padding: 5px;
                    margin-bottom: 60px;
                `
            )}

            p {
                line-height: 1.25;
            }
            
            :last-child {
                margin-bottom: 60px;
            }
        }
    }
    ${media(
        "tablet",
        `
            width: 100%;
            max-width: none;
        `
    )}
`;

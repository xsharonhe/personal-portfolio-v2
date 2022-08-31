import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Highlight } from "../components/Texts";
import Profile from "../public/profile-1.png";
import { PageLayout, BriefHistory } from "../components/sections";
import { media } from "../utils";

export default function About() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Sharon He is a 20 y/o developer from Toronto, Canada who is passionate about data, infrastructure, and predictive analytics."
                />
            </Head>
            <PageLayout title="About">
                <Wrapper>
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
                                That&apos;s partially why I love building software. I believe in 
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
                                {" and worked on designing APIs and services, and building their new event-sourcing platform. "}
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
                                <Link href="/about">
                                    <a>
                                        <Highlight>
                                            down below
                                        </Highlight>
                                    </a>
                                </Link>
                                {"."}
                            </p>
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
                        </Content>
                    </UpperHeading>
                    <MoreContent>
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
                    <BriefHistory />
                </Wrapper>
            </PageLayout>
        </>
    )
};

const Wrapper = styled.div`
    font-size: 1.2rem;
    padding-bottom: 80px;
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
    text-align: center;
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

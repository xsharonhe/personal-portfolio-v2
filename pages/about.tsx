import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Highlight } from "../components/Texts";
import Profile from "../public/profile-1.png";
import { PageLayout } from "../components/sections";
import { media } from "../utils";

export default function About() {
    return (
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
                            {"I am currently interning as a software developer at "}
                            <a
                                href="https://geotab.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Highlight>
                                    Geotab
                                </Highlight>
                            </a>
                            {" working on their fleet management solutions and data pipelines. I also have experience in "}
                            {"website development, data analytics, machine learning, and cloud computing."}
                        </p>
                        <p>
                            {"These days, I spend my time learning about infastructure, "}
                            <a
                                href="https://dataintensive.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Highlight>
                                    building data intensive applications
                                </Highlight>
                            </a>
                            {", "}
                            <a
                                href="https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <Highlight>
                                    linear algebra
                                </Highlight>
                            </a>
                            {". "} 
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
                            <Link href="/projects">
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
            </Wrapper>
        </PageLayout>
    )
};

const Wrapper = styled.div`
    font-size: 1.2rem;
    padding-bottom: 60px;
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
interface ILinkProps {
    href: string;
    target?: string;
}
const SLink = styled.a<ILinkProps>``;

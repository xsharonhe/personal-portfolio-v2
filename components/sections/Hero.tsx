import { useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Highlight } from "../Texts";
import puzzleImg from "../../public/home/home-mobile.svg";
import { CodeBlock } from "../Containers";
import { media } from "../../utils";

const getCodeSnippet = () => {
     return (
        <>
            <span>
                <span style={{ color: "#ff79c6" }}>{"const "}</span>
                <span style={{ color: "#bd93f9" }}>{"Sharon "}</span>
                {"= {"}
            </span>
            <span>
                {'    "currently": '}
                <span style={{ color: "#f1fa8c" }}>
                    {'"@geotab, @pumprofessionals, @waterloo"'}
                </span>
            </span>
            <span>
                {'    "interests": ['}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "data",'}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "infrastructure",'}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "econ"'}
            </span>
            <span>
                {'    ],'}
            </span>
            <span>
                {'    "hobbies": '}
                <span style={{ color: "#f1fa8c" }}>
                    {'"puzzles"'}
                </span>
            </span>
            <span>
                {"};"}
            </span>
        </>
    )
}

export function Hero() {
    const memoizedCodeSnippet = useCallback(getCodeSnippet, []);
    return (
        <Wrapper>
            <Section>
                <Title>Hi, I&apos;m Sharon</Title>
                <SubHeadline>
                    I love all things code and numbers. I am passionate about creating remarkable 
                    digital experiences with a focus on data and analytics. 
                </SubHeadline>
                <br />
                <CodeWrapper>
                    <CodeBlock 
                        lineNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        codeSnippet={memoizedCodeSnippet()}
                    />
                </CodeWrapper>
                <br />
            </Section>
            <PuzzleContainer>
                <Image 
                    src={puzzleImg} 
                    alt="Puzzle image"
                    width={600}
                    height={600}
                />
                <div>
                    <Link href="/about">
                        <a>
                            <Highlight>
                                Why Puzzles?
                            </Highlight>
                        </a>
                    </Link>
                </div>
            </PuzzleContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 40px;
    ${media(
        "half_laptop",
        `
            width: 100%;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            `
    )};
`;
const SubHeadline = styled.p`
    span {  
        color: black;
    }
    ${media(
        "half_laptop",
        `
            width: 100%;
            `
    )};
`;
const Section = styled.div`
    width: 60%;
    margin-top: 20px;
    ${media(
        "half_laptop",
        `
            width: 100%;
            margin-bottom: -60px;
            margin-top: 0;
            `
    )};
`;
const CodeWrapper = styled.div`
    ${media(
        "half_laptop",
        `
            display: flex;
            justify-content: center;
            `
    )};
`;
const PuzzleContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 68px;
    font-weight: 600;
    ${({ theme }) => `
        font-family: ${theme.font.header};
    `};
    ${media(
        "half_laptop",
        `
            font-size: 60px;
            text-align: center;
            `
    )};
    ${media(
        "tablet",
        `
            font-size: 50px;
            `
    )};
`;

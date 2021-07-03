import { useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";
import puzzleImg from "../../public/home/home-mobile.svg";
import { CodeBlock } from "../Containers";
import { media } from "../../utils";

const HEADLINE = "Hi, I'm Sharon.";
const SUBHEADLINE = "I love all things code.";

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
                    {'"swe @ GEOTAB, head of tech @ PuMP",'}
                </span>
            </span>
            <span>
                {'    "interests": '}
                <span style={{ color: "#f1fa8c" }}>
                    {'"data, infrastructure, economics",'}
                </span>
            </span>
            <span>
                {'    "hobbies": '}
                <span style={{ color: "#f1fa8c" }}>
                    {'"puzzles"'}
                </span>
            </span>
            <span>
                {"}"}
            </span>
        </>
    )
}

export function Hero() {
    const memoizedCodeSnippet = useCallback(getCodeSnippet, []);
    return (
        <Wrapper>
            <Section>
                <Title>{HEADLINE}</Title>
                <p style={{ marginBottom: "40px" }}>
                    {SUBHEADLINE}
                </p>
                <CodeBlock 
                    lineNumbers={[1, 2, 3, 4, 5]}
                    codeSnippet={memoizedCodeSnippet()}
                />
            </Section>
            <Image 
                src={puzzleImg} 
                alt="Puzzle image"
                width={500}
                height={500}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px;
    ${media(
        "half_laptop",
        `
            flex-direction: column;
            text-align: center;
            justify-content: center;
            `
    )};
`;
const Section = styled.div`
    ${media(
        "half_laptop",
        `
            margin: auto;
            `
    )};
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
            `
    )};
    ${media(
        "tablet",
        `
            font-size: 50px;
            `
    )};
`;
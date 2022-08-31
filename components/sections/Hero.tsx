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
                {'    "currently": ['}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "@pumprofessionals, @uwaterloo'}
            </span>
            <span>
                {'    ],'}
            </span>
            <span>
                {'    "prev": '}
                <span style={{ color: "#f1fa8c" }}>
                    {'"@kiavi, @geotab"'}
                </span>
            </span>
            <span>
                {'    "interests": ['}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "data + database internals",'}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "distributed systems",'}
            </span>
            <span style={{ color: "#f1fa8c" }}>
                {'        "predictive analytics"'}
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
            <span>{' '}</span>
        </>
    )
}

export function Hero() {
    return (
        <Wrapper>
            <Section>
                <Title>Hi, I&apos;m Sharon!</Title>
                <SubHeadline>
                    I love all things code and numbers. I am passionate about problem solving, and building scalable and efficient systems. 
                </SubHeadline>
                <br />
                <CodeWrapper>
                    <CodeBlock 
                        lineNumbers={Array.from({ length: 14 }, (_, i) => i + 1)}
                        codeSnippet={getCodeSnippet()}
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
            margin: auto;
            text-align: center;
            `
    )};
`;
const SubHeadline = styled.p`
    span {  
        color: black;
        font-size: 18px;
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
    padding-left: 40px;
    ${media(
        "half_laptop",
        `
            width: 90%;
            margin-bottom: -60px;
            margin-top: 0;
            padding-left: 20px;
            `
    )};
`;
const CodeWrapper = styled.div`
    ${media(
        "half_laptop",
        `
            display: flex;
            justify-content: center;
            margin: auto;
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

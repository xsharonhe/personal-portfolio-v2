import styled from "styled-components";
import Image from "next/image";
import puzzleImg from "../../public/home/home-mobile.svg";
import { media } from "../../utils";

const HEADLINE = "Hi, I'm Sharon.";

export function Hero() {
    return (
        <Wrapper>
            <Section>
                <Title>{HEADLINE}</Title>
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
            `
    )};
`;
const Section = styled.div`
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
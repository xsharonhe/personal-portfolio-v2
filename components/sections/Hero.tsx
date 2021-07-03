import styled from "styled-components";
import Image from "next/image";
import puzzleImg from "../../public/home/home-mobile.svg";
import { media } from "../../utils";

const HEADLINE = "Hi, I'm Sharon.";

export default function Hero() {
    return (
        <Wrapper>
            <Title>{HEADLINE}</Title>
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
    ${media(
        "tablet",
        `
            flex-direction: column;
            text-align: center;
            `
    )};
`;
const Title = styled.h1`
    font-size: 70px;
    ${({ theme }) => `
        font-family: ${theme.font.header};
    `};
    ${media(
        "tablet",
        `
            font-size: 56px;
            `
    )};
    ${media(
        "tablet",
        `
            font-size: 56px;
            `
    )};
    ${media(
        "mobile",
        `
            font-size: 42px;
            `
    )};
`;
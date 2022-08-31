import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Highlight } from "../Texts";
import { Experience } from "../Containers";
import { media } from "../../utils";

export function BriefHistory() {
    return (
        <Wrapper id="briefhistory">
            <h1>A Brief History</h1>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    ${({ theme }) => `
        font-family: ${theme.font.header};
    `};
    ${media(
        "half_laptop",
        `
            font-size: 40px;
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

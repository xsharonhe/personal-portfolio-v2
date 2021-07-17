import Image from "next/image";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import { media } from "../../utils";

interface IPageLayoutProps {
    children: React.ReactNode;
    title?: string;
};

export const PageLayout = ({ children, title }: IPageLayoutProps) => (
    <div> 
        <Navbar />
        {!!title && (
            <Wrapper>
                <Title>
                    {title}
                </Title>
            </Wrapper>
        )}
        {children}
        <Copyright>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={50}
                height={50}
            />
            <p>
                Developed by Sharon He 
                &copy; 
                2021
            </p>
        </Copyright>
    </div>
);

const Copyright = styled.div`
    padding-bottom: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    
    p {
        font-size: 15px;
    }

    ${media(
        "tablet",
        `
            margin: auto;
            margin-right: 5%;
            text-align: center;
            justify-content: center;
            `
    )};
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    ${media(
        700,
        `
            margin-top: 40px;
            `
    )};
`;
const Title = styled.h1`
    font-size: 68px;
    font-weight: 600;
    text-align: center;
    display: block;
    position: relative;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 90%, rgba(170, 223, 237, 0.5) 10%);
    ${({ theme }) => `
        font-family: ${theme.font.header};
    `};
    ${media(
        "half_laptop",
        `
            font-size: 56px;
            `
    )};
    ${media(
        "tablet",
        `
            font-size: 44px;
            `
    )};
    ${media(
        601,
        `
            font-size: 36px;
            `
    )};
    ${media(
        500,
        `
            font-size: 28px;
        `
    )};
`;
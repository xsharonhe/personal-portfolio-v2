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
    </div>
);
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
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
            font-size: 60px;;
            `
    )};
    ${media(
        "tablet",
        `
            font-size: 50px;
            `
    )};
        ${media(
        601,
        `
            font-size: 32px;
            `
    )};
`;
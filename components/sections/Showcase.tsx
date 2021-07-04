import styled from "styled-components";
import { media } from "../../utils";

export function Showcase() {
    return (
        <Wrapper>
            <Title>Projects Showcase</Title>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    padding-bottom: 40px;
`;
const Title = styled.h1`
    font-size: 50px;
    font-weight: 600;
    ${({ theme }) => `
        font-family: ${theme.font.header};
    `};
    ${media(
        "half_laptop",
        `
            font-size: 40px;
            text-align: center;
            `
    )};
`;

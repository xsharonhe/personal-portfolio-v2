import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Title>
        Project Showcase
      </Title>
      <p>Hello, I'm Sharon.</p>
    </>
  )
};

const Title = styled.h1`
  font-size: 72px;
  ${({ theme }) => `
    font-family: ${theme.font.header};
  `};
`;

import styled from "styled-components";
import Navbar from "../components/Containers/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title>
        Hi, I am Sharon.
      </Title>
      <p>I love to code.</p>
    </>
  )
};

const Title = styled.h1`
  font-size: 72px;
  ${({ theme }) => `
    font-family: ${theme.font.header};
  `};
`;

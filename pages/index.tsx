import styled from "styled-components";
import Navbar from "../components/Containers/Navbar";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
};

const Title = styled.h1`
  font-size: 72px;
  ${({ theme }) => `
    font-family: ${theme.font.header};
  `};
`;

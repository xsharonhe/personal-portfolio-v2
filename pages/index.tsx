import styled from "styled-components";
import { Hero, PageLayout, Showcase } from "../components/sections";

export default function Home() {
  return (
    <PageLayout>
      <Wrapper>
        <Hero />
        <Showcase />
      </Wrapper>
    </PageLayout>
  )
};

const Wrapper = styled.div`
  padding: 0 40px;
`;
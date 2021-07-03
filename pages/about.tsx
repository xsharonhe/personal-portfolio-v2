import styled from "styled-components";
import Image from "next/image";

import Profile from "../public/profile-1.png";
import { PageLayout } from "../components/sections";
import { media } from "../utils";

export default function About() {
    return (
        <PageLayout title="About">
            <Wrapper>
                <Image
                    src={Profile}
                    alt="Profile"
                    width={420}
                    height={300}
                />
                <p>
                    Hi, I love to code
                </p>
            </Wrapper>
        </PageLayout>
    )
};

const Wrapper = styled.div`
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${media(
        `tablet`,
        `
            flex-direction: column;
            justify-content: center;
        `
    )};
`;
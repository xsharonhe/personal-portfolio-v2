import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { media } from "../../utils";

export interface IProjectProps {
    slug: string;
    priority: number;
    thumbnail: string;
    title: string;
    subtitle?: string;
    description: string;
    tags?: string[];
    images?: string[];
    links?: string[];
    showcase?: string[];
    achievements?: string;
};

export function Project ({ 
    slug,
    priority,
    thumbnail,
    subtitle = "",
    title,
    description,
    tags = [],
    images = [],
    links = [],
    showcase = [],
    achievements = ""
}: IProjectProps) {
    return (
        <Wrapper>
            <Link href={`/projects/${slug}`}>
                <a aria-label={title}>
                    <Section>
                        <ImageWrapper>
                            <Image 
                                src={thumbnail} 
                                alt={title} 
                                width={300}
                                height={300}
                            />
                        </ImageWrapper>
                        <Content>
                            {!!achievements && <SubContent>{achievements.toUpperCase()}</SubContent>}
                            <Title>{title}</Title>
                        </Content>
                    </Section>
                </a>
            </Link>
        </Wrapper>
)
}

const Wrapper = styled.div`
    margin-top: 20px;
    border: 3px solid black;
    border-radius: 12px;
    margin-bottom: 30px;
    height: 300px;
    :hover {
        transform: scale(1.03);
        transition: all ease 0.4s;
    }
    ${media(
        "tablet",
        `
            height: auto;
        `
    )}
`;
const Section = styled.div`
    display: flex;
    flex-direction: row;
    ${media(
        "tablet",
        `
            flex-direction: column;
        `
    )}
`;
const Content = styled.div`
    width: 60%;
    padding: 25px;
    ${media(
        "tablet",
        `
            width: 100%;
            text-align: center;
            padding: 0;
        `
    )}
`;
const SubContent = styled.p`
    ${({ theme }) => ` 
        color: ${theme.colors.grey};
        font-size: 16px;
        margin-bottom: -10px;
    `};
`;
const Title = styled.h3`
    ${({ theme }) => `
        font-weight: 500;
        font-size: 24px;
        font-weight: bold;
    `}
`;
const ImageWrapper = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    height: 300px;
`;

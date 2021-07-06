import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Tag } from "../Inputs";
import { media } from "../../utils";

export interface IProjectProps {
    slug: string;
    priority: number;
    thumbnail: string;
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    images?: string[];
    links: string[];
    captions: string[];
    achievements?: string;
    label: string;
};

export function Project ({ 
    slug,
    priority,
    thumbnail,
    subtitle = "",
    title,
    description,
    tags,
    images = [],
    links = [],
    captions = [],
    achievements = "",
    label
}: IProjectProps) {
    return (
        <Wrapper>
            <Link href={`/projects/${slug}`}>
                <a aria-label={title}>
                    <Section>
                    <ImageWrapper>
                        <Image
                            alt={title}
                            src={thumbnail}
                            height={300}
                            width={350}
                        />
                    </ImageWrapper>
                        <Content>
                            {!!achievements && <SubContent>{achievements}</SubContent>}
                            <Title>{title}</Title>
                            <TagContainer>
                                {tags.map(tag => (
                                    <STag key={tag}>{tag.toUpperCase()}</STag>
                                ))}
                            </TagContainer>
                            <p>
                                {description}
                            </p>
                        </Content>
                    </Section>
                </a>
            </Link>
        </Wrapper>
)
}

const Wrapper = styled.div`
    margin-top: 20px;
    border: 4px solid black;
    border-radius: 12px;
    margin-bottom: 30px;
    ${({ theme }) => `
        :hover {
            box-shadow: 12px 7px rgba(0,0,0, 0.5);
            transform: scale(1.03);
            transition: all ease 0.4s;
        }
        p {
            font-family: ${theme.font.body};
            font-size: 18px;
        }
    `}
    ${media(
        850,
        `
            height: auto; 
            p {
                padding: 5px 20px 0 20px;
            }
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
    padding: 15px 25px 35px 35px;
    background-color: black;
    color: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    ${media(
        "tablet",
        `
            width: 100%;
            text-align: center;
            padding: 0 0 30px 0;
            border-top-right-radius: 0;
        `
    )}
`;
const SubContent = styled.p`
    ${({ theme }) => ` 
        color: ${theme.colors.grey};
        font-family: ${theme.font.header};
        font-size: 12px;
        margin-bottom: -10px;
    `};
`;
const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    font-weight: bold;
`;
const TagContainer = styled.div`
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;
    margin-bottom: -10px;
    ${media(
        "tablet",
        `
            justify-content: center;
        `
    )};
`;
const STag = styled(Tag)`
    margin-right: 10px;
    margin-bottom: 10px;
`;
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 8px 0 0 8px;
    background-color: rgba(177, 206, 153, 0.75);
    ${media(
        "tablet",
        `
            border-bottom-left-radius: 0;
            border-top-right-radius: 8px;
        `
    )};
`;

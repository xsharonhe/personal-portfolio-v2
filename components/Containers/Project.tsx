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
    tags,
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
                            alt="Mountains"
                            src={thumbnail}
                            height={450}
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
            box-shadow: 8px 10px rgba(177, 206, 153, 0.5);
        }
        p {
            font-family: ${theme.font.body};
            font-size: 18px;
        }
    `}
    :hover {
        transform: scale(1.03);
        transition: all ease 0.4s;
    }
    ${media(
        "tablet",
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
    ${media(
        "tablet",
        `
            width: 100%;
            text-align: center;
            padding: 0 0 30px 0;
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
    )}
`;
const STag = styled(Tag)`
    margin-right: 10px;
    margin-bottom: 10px;
`;
const ImageWrapper = styled.div`
    display: flex;
    border-radius: 8px 0 0 8px;
    ${({ theme }) => `
        background-color: ${theme.colors.green};
    `};
`;

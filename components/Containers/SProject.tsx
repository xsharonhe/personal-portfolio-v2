import Link from "next/link";
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

export function SProject ({ 
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
        <Link href={`/projects/${slug}`}>
            <Project aria-label={title}>
                <ImageWrapper>
                    <img src={thumbnail} alt={title} />
                </ImageWrapper>
                <Content>
                    {!!achievements && <span>{achievements}</span>}
                    <h3>{title}</h3>
                    <TagContainer>
                        {tags.map(tag => (
                            <STag key={tag}>{tag.toUpperCase()}</STag>
                        ))}
                    </TagContainer>
                    <p>{description}</p>
                </Content>
            </Project>
        </Link>
)
}

const Project = styled.a`
    display: flex;
    flex-direction: row;
    border: 5px solid black;
    border-radius: 14px;
    width: calc(60% - 40px);
    margin: 30px 15px 30px 0;
    transition: all 0.2s ease-in-out;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(170, 223, 237, 0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(170, 223, 237, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(170, 223, 237, 0.5);

    :hover {
        transform: scale(1.03);
        border-color: ${(props) => props.theme.colors.yellow};
    }

    @media screen and (max-width: 500px) {
        min-width: 100%;
        width: 100%;
        margin-right: 0px;
    }
`;
const Content = styled.div`
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: black;
    color: #fff;

    ${({ theme }) => `
        span {
            font-size: 18px;
            color: ${theme.colors.grey};
        }
    `}

    h3 {
        font-weight: bold;
        font-size: 32px;
        margin-block-start: 12.5px;
        margin-block-end: 7.5px;
    }
        
    p {
        font-size: 18px;
    }
`;
const ImageWrapper = styled.div`
    display: inline-block;
    width: 100%;

    img {
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`;
const TagContainer = styled.div`
    display: flex;
    width: auto;
    flex-direction: row;
    flex-wrap: wrap;
`;
const STag = styled(Tag)`
    margin-right: 10px;
    margin-bottom: 10px;
`;

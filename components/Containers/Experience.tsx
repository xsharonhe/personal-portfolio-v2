import styled from "styled-components";
import { Tag } from "../Inputs";
import { media } from "../../utils";

export interface IProjectProps {
    linkTo?: string;
    title: string;
    tags: string[];
    position: string;
    content: string;
    date: string;
};

export function Experience ({ 
    linkTo,
    title,
    position,
    tags,
    date,
    content,
}: IProjectProps) {
    return (
        <Wrapper>
            <a
                href={linkTo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
            >
                <Section>
                    <Content>
                        <SubContent>{date}</SubContent>
                        <Title>{title}{", "} 
                            <span>{position}</span>
                        </Title>
                        <TagContainer>
                            {tags.map(tag => (
                                <STag key={tag}>{tag.toUpperCase()}</STag>
                            ))}
                        </TagContainer>
                        <p>
                            {content}
                        </p>
                    </Content>
                </Section>
            </a>
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
    ${media(
        600,
        `
            p {
                font-size: 16px;
            }
        `
    )};
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
    width: 100%;
    padding: 15px 25px 35px 35px;
    background-color: black;
    color: white;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    ${media(
        "tablet",
        `
            text-align: center;
            padding: 0 0 30px 0;
            border-top-right-radius: 0;
        `
    )};
`;
const SubContent = styled.p`
    ${({ theme }) => ` 
        color: ${theme.colors.grey};
        font-family: ${theme.font.body};
        font-size: 12px;
        margin-bottom: -10px;
    `};
    ${media(
        850,
        `
           padding: 0 20px;
        `
    )}
`;
const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    font-weight: bold;
    ${media(
        600,
        `
            font-size: 24px;
        `
    )};
    span {
        color: white;
        font-size: 20px;
    }
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

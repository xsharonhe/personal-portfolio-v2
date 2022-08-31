import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Tag } from "../Inputs";
import { media } from "../../utils";

export interface IExperienceProps {
    company: string,
    position: string,
    priority: number,
};

export function Experience ({ 
    company,
    position,
    priority,
    ...props
}: IExperienceProps) {
    return (
        <Wrapper {...props}>
            company
            position
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
    border: 4px solid black;
    border-radius: 12px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
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

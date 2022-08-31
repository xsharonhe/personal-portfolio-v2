import styled from "styled-components";
import { media } from "../../utils";

interface ISubtitleProps {
    children: React.ReactNode;
}
export function Subtitle({ children, ...props }: ISubtitleProps) {
  return (
      <StyledSubtitle {...props}>{children}</StyledSubtitle>  
  )
};

const StyledSubtitle = styled.h3`
    font-size: 20px;
    color: #AAAAAA;
    text-align: center;
    font-weight: normal;
    font-style: italic;
    margin: -25px 10px 0 10px;
    ${({ theme }) => `
        font-family: ${theme.font.body};
    `}
    ${media(
        "tablet",
        `
            font-size: 18px;
            margin: -10px 10px 0 10px;
        `
    )}
`;
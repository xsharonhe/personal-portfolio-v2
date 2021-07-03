import styled from "styled-components";

interface IHighlightProps {
    children: React.ReactNode;
}
export function Highlight({ children, ...props }: IHighlightProps) {
  return (
      <SHighlight {...props}>{children}</SHighlight>  
  )
};

const SHighlight = styled.span`
    ${({ theme }) => `
        color: black;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(170, 223, 237, 0.5) 20%);
        :hover {
            color: ${theme.colors.primary};
            cursor: pointer;
            transition: all .2s ease-in-out;
        }
    `};
`;

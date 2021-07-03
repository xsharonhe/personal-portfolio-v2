import styled from "styled-components";

interface IHighlightProps {
    children: React.ReactNode;
}
export function Highlight({ children }: IHighlightProps) {
  return (
    <SHighlight>
        {children}
    </SHighlight>
  )
};

const SHighlight = styled.span`
    ${({ theme }) => `
        :hover {
            display: block;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(170, 223, 237, 0.5) 20%);
            transform: translate3d(0,5px,0);
            transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
        }
    `};
`;

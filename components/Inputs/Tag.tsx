import styled from "styled-components";
import { media } from "../../utils";

interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
};

export function Tag ({
    children,
    ...props
}: ITagProps) {
    return (
        <STag {...props}>
            {children}
        </STag>
    )
}

const STag = styled.div`
    color: black;
    font-size: 12px;
    padding: 5px 10px 3px 10px;
    ${({ theme }) => `
        background-color: ${theme.colors.primary};
        border-radius: ${theme.radius.default};
    `}
`;

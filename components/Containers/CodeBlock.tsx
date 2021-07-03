import styled from "styled-components";

interface ICodeBlockProps extends React.HTMLAttributes<HTMLDivElement>{
    lineNumbers: number[];
    codeSnippet: React.ReactElement;
}
export function CodeBlock({
    lineNumbers,
    codeSnippet,
    ...props
}: ICodeBlockProps) {
    return (
        <STable {...props}>
            <tbody>
                <tr>
                    <td>
                        <LineNumbers>
                            <code>
                                {lineNumbers.map(lineNumber => (
                                    <span key={lineNumber}>
                                        {lineNumber}
                                    </span>
                                ))}
                            </code>
                        </LineNumbers>
                    </td>
                    <td>
                        <Code>
                            <code>
                                {codeSnippet}
                            </code>
                        </Code>
                    </td>
                </tr>
            </tbody>
        </STable>
    )
};

const STable = styled.table`
    background-color: #282a36;
    padding: 0 20px;
    ${({ theme }) => `
        code {
            font-family: ${theme.font.code};
            font-size: 16px;
            span {
                color: #f8f8f2;
            }
        }
    `};
`;
const LineNumbers = styled.pre`
    code {
        display: flex;
        flex-direction: column;
        span {
            color: #6272a4;
        }
    }
`;
const Code = styled.pre`
    code {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        span {
            text-align: left;
            span {
                flex-direction: row;
            }
        }
    }
`;
import React from "react";
import styled from "styled-components";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
};

export const Button: React.FC<IButtonProps> = ({
  color,
  backgroundColor,
  borderColor,
  children,
  ...props
}) => (
  <SButton
    color={color}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    {...props}
  >
    {children}
  </SButton>
);

const SButton = styled.button<IButtonProps>`
  ${({
    theme,
    color = "black",
    backgroundColor = "primary",
    borderColor = "primary",
  }) => `
        color: ${theme.colors[color] || color};
        border: 1px solid ${theme.colors[borderColor] || borderColor};
        font-size: ${theme.size.default};
        font-family: ${theme.font.body};
        text-decoration: none;
        cursor: pointer;
        padding: 0.8rem 1.75rem 0.6rem 1.75rem;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: ${theme.radius.button};
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
        &:focus,
        &:active,
        &:hover {
            outline: none;
            transform: translate3d(0,5px,0);
            transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
        }
        &:after {
            display: none !important;
        }
    `};
`;

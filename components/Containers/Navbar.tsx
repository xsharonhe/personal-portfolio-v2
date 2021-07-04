import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Inputs";
import { ReorderThree } from "@styled-icons/ionicons-solid/ReorderThree";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import Logo from "../../public/logo.svg";
import { CONSTANTS, media } from "../../utils";

export function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const handleClick = () => setIsHidden(!isHidden);
    return (
        <SNavbar>
            <Section >
                <Link href="/">
                    <a>
                        <Image
                            src={Logo}
                            alt="Website Logo" 
                            height={120}
                            width={120}
                        />
                    </a>
                </Link>
                <div onClick={handleClick}>
                    {isHidden ? <NavbarIcon as={CloseOutline} />
                            : <NavbarIcon as={ReorderThree} />}
                </div>
            </Section>
            <NavItems isHidden={isHidden}>
                    <NavItem key={`navitem__home`}>
                        <Highlight>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </Highlight>
                    </NavItem> 
                    <NavItem key={`navitem__about`}>
                        <Highlight>
                            <Link href="/about">
                                <a>
                                    About
                                </a>
                            </Link>
                        </Highlight>
                    </NavItem> 
                    <NavItem key={`navitem__projects`}>
                        <Highlight>
                            <Link href="/projects">
                                <a>
                                    Projects
                                </a>
                            </Link>
                        </Highlight>
                    </NavItem> 
                    <NavItem key={`navitem__wip`}>
                        <Highlight>
                            <Link href="/wip">
                                <a>
                                    WIP
                                </a>
                            </Link>
                        </Highlight>
                    </NavItem> 
                    <Button>
                        Resume
                    </Button>
            </NavItems>
            {!!isHidden && <BottomNavigation isHidden={isHidden} />}
        </SNavbar>
    );
};

const SNavbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    ${media(
        700,
        `
            flex-direction: column;
            `
    )};
    ${media(
        "mobile",
        `
            padding: 0;
            `
    )};
`;
const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    ${media(
        700,
        `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            `
    )};
`;
const NavItem = styled.span`
    margin-right: 5vw;
    font-size: 20px;
    ${media(
        700,
        `
            margin-right: 0;
            padding-bottom: 20px;
            `
    )};
`;
interface INavItemsProps {
    isHidden: boolean;
};
const NavItems = styled(Section)<INavItemsProps>`
    @media only screen and (max-width: 700px) {
        display: ${(props) => (props.isHidden ? "flex" : "none")};
    }
    ${media(
        700,
        `
            padding-bottom: 20px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            `
    )};
`;
const Highlight = styled.span`
    ${({ theme }) => `
        :hover {
            display: block;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, rgba(170, 223, 237, 0.5) 20%);
            transform: translate3d(0,5px,0);
            transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
        }
    `};
`;
const BottomNavigation = styled.hr<INavItemsProps>`
    @media only screen and (max-width: 700px) {
        display: ${(props) => (props.isHidden ? "flex" : "none")};
        border: 2px solid black;
        width: 80%;
    }
`;
const Icon = styled.svg`
    height: 40px;
    width: 40px;
    margin-right: 3vw;
    :hover {
        cursor: pointer;
        transform: translate3d(0, 5px, 0);
        opacity: 0.7;
        transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
    }
`;
const NavbarIcon = styled.svg`
    height: 60px;
    width: 60px;
    display: none;
    ${media(
        700,
        `
            display: flex;
            cursor: pointer;
            opacity: 1;
            margin-right: 5vw;
            :hover {
                opacity: 0.8;
            }
            `
    )};
`;
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    ${media(
        700,
        `
            margin-top: 10px;
            `
    )};
`;

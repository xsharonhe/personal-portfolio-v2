import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Github } from "@styled-icons/boxicons-logos";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { ReorderThree } from "@styled-icons/ionicons-solid/ReorderThree";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import Logo from "../../public/logo.svg";
import { CONSTANTS, media } from "../../utils";

const NAV_ITEMS = [
    {
        name: "Home",
        href: "",
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Projects",
        href: "projects",
    },
    {   
        name: "WIP",
        href: "wip",
    }
];

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
                {NAV_ITEMS.map((item) => (
                    <NavItem key={item.name}>
                        <Highlight>
                            <Link href={`/${item.href}`}>
                                <a>
                                    {item.name}
                                </a>
                            </Link>
                        </Highlight>
                    </NavItem> 
                ))} 
                <IconWrapper>
                    <a href={CONSTANTS.github} target="_blank" rel="noopener noreferrer">
                        <Icon as={Github} />
                    </a>
                    <a href={CONSTANTS.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon as={LinkedinSquare} />
                    </a>
                </IconWrapper>
            </NavItems>
            {!!isHidden && <BottomNavigation isHidden={isHidden} />}
        </SNavbar>
    );
};

const SNavbar = styled.div`
    display: flex;
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
    ${media(
        700,
        `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            `
    )};
    ${media(
        700,
        `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            `
    )};
`;
const NavItem = styled.h3`
    margin-right: 5vw;
    font-size: 20px;
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
            flex-direction: column;
            align-items: flex-end;
            padding-bottom: 40px;
            margin-right: 10vw;
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
        border: 3px solid black;
        radius: 4px;
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
            margin-right: 10vw;
            :hover {
                opacity: 0.;
            }
            `
    )};
`;
const IconWrapper = styled.div`
    ${media(
        700,
        `
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            `
    )};
`;

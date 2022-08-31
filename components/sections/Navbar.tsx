import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ReorderThree } from "@styled-icons/ionicons-solid/ReorderThree";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import Logo from "../../public/logo.svg";
import { media } from "../../utils";

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
                    <NavItem key={`navitem__experiences`}>
                        <Highlight>
                            <Link href="/experiences">
                                <a>
                                    Experiences
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
                        {/* <Button>
                            <a
                                href="/SharonHe_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white" }}
                            >
                                Resume
                            </a>
                        </Button> */}
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
        800,
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
    width: 90%;
    ${media(
        800,
        `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            `
    )};
`;
const NavItem = styled.span`
    /* margin-right: 5vw; */
    margin-left: 5vw;
    font-size: 20px;
    ${media(
        800,
        `
            margin-left: 0;
            padding-bottom: 20px;
            `
    )};
`;
interface INavItemsProps {
    isHidden: boolean;
};
const NavItems = styled(Section)<INavItemsProps>`
    @media only screen and (max-width: 800px) {
        display: ${(props) => (props.isHidden ? "flex" : "none")};
    }
    ${media(
        800,
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
            transform: translate3d(0, 5px, 0);
            transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
        }
    `};
`;
const BottomNavigation = styled.hr<INavItemsProps>`
    @media only screen and (max-width: 800px) {
        display: ${(props) => (props.isHidden ? "flex" : "none")};
        border-bottom: 3px solid black;
        width: 80%;
    }
`;
const NavbarIcon = styled.svg`
    height: 60px;
    width: 60px;
    display: none;
    ${media(
        800,
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

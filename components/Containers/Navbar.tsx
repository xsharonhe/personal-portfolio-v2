import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Github } from "@styled-icons/boxicons-logos";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import Logo from "../../public/logo.svg";
import { media } from "../../utils/media";
import { CONSTANTS } from "../../utils/constants";

const NAV_ITEMS = [
    {
        name: "Home",
        href: "",
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

export default function Navbar() {
    return (
        <SNavbar>
            <Section>
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
            </Section>
            <Section>
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
                <a href={CONSTANTS.github} target="_blank" rel="noopener noreferrer">
                    <Icon as={Github} />
                </a>
                <a href={CONSTANTS.linkedin} target="_blank" rel="noopener noreferrer">
                    <Icon as={LinkedinSquare} />
                </a>
            </Section>
        </SNavbar>
    );
};

const SNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
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
`;
const NavItem = styled.p`
    margin-right: 5vw;
`;
const Highlight = styled.span`
    ${({ theme }) => `
        :hover {
            display: block;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 65%, rgba(170, 223, 237, 0.5) 35%);
            transform: translate3d(0,5px,0);
            transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
        }
    `};
`;
const Icon = styled.svg`
    height: 40px;
    width: 40px;
    margin-right: 3vw;
    :hover {
        cursor: pointer;
        transform: translate3d(0,5px,0);
        opacity: 0.7;
        transition: all .2s cubic-bezier(.175, .885, .32, 1.275);
    }
`;

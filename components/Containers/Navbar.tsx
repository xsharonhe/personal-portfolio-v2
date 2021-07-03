import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import Logo from "../../public/logo.svg";

const NAV_ITEMS = [
    "home",
    "projects",
    "wip"
];

export default function Navbar() {
    return (
        <SNavbar>
            <Section style={{ justifyContent: "space-between"}}>
                {NAV_ITEMS.map((item) => (
                    <NavItem key={item}>
                        <Link href={`/${item}`}>
                            <a>
                                {item}
                            </a>
                        </Link>
                    </NavItem> 
                ))} 
            </Section>
            <Section style={{ justifyContent: "center"}}>
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
            <Section style={{ justifyContent: "flex-end" }}>
                <Icon as={Github} />
                <Icon as={LinkedinSquare} />
            </Section>
        </SNavbar>
    );
};

const SNavbar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 5%;
`;
const Section = styled.div`
    display: flex;
    flex-direction: row;
`;
const NavItem = styled.p`
    margin-right: 15%;
`;
const Icon = styled.svg`
    height: 50px;
    width: 50px;
    margin-left: 10%;
    :hover {
        opacity: 0.7;
    }
`;

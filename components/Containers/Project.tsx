import Link from "next/link";
import styled from "styled-components";

export interface IProjectProps {
    slug: string;
    priority: number;
    thumbnail: string;
    title: string;
    subtitle?: string;
    description: string;
    tags?: string[];
    images?: string[];
    links?: string[];
    showcase?: string[];
};

export function Project ({ 
    slug,
    priority,
    thumbnail,
    title,
    description,
    tags = [],
    images = [],
    links = [],
    showcase = []
}: IProjectProps) {
    return (
        <Wrapper>
            <Link href={`/projects/${slug}`}>
                <a aria-label={title}>{title}</a>
            </Link>
        </Wrapper>
)
}

const Wrapper = styled.div`
`;

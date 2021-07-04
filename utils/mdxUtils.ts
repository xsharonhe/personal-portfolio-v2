import fs from 'fs';
import { join } from "path";
import matter from "gray-matter";

type Items = {
    [key: string]: string;
};

type Project = {
    data: {
        [key: string]: string;
    };
    content: string;
};

const PROJECT_PATHS = join(process.cwd(), "_projects");

function getProjectFilePaths(): string[] {
    return (
        fs
            .readdirSync(PROJECT_PATHS)
            .filter((path) => /\.mdx?$/.test(path))
    );
};

export function getProject(slug: string): Project {
    const fullPath = join(PROJECT_PATHS, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { data, content };
};

export function getProjectItems(filePath: string, fields: string[] = []) {
    const slug = filePath.replace(/\.mdx?$/, "");
    const { data, content } = getProject(slug);
    
    const items: Items = {};

    fields.forEach((field) => {
        if(field === "slug") {
            items[field] = slug;
        } 
        if (field === "content") {
            items[field] = content;
        }
        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
};

export function getAllProjects(fields: string[] = []): Items[] {
    const filePaths = getProjectFilePaths();
    const projects = filePaths
        .map((filePath) => getProjectItems(filePath, fields))
        .sort((post1, post2) => (post1.priority > post2.priority ? 1 : -1));

    return projects;
};

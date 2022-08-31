import fs from "fs";
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

const EXPERIENCE_PATHS = join(process.cwd(), "_experiences");

function getExperienceFilePaths(): string[] {
    return (
        fs
            .readdirSync(EXPERIENCE_PATHS)
            .filter((path) => /\.mdx?$/.test(path))
    );
};

export function getExperience(slug: string): Project {
    const fullPath = join(EXPERIENCE_PATHS, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { data, content };
};

export function getExperienceItems(filePath: string, fields: string[] = []) {
    const slug = filePath.replace(/\.mdx?$/, "");
    const { data, content } = getExperience(slug);
    
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

export function getAllExperiences(fields: string[] = []): Items[] {
    const filePaths = getExperienceFilePaths();
    const experiences = filePaths
        .map((filePath) => getExperienceItems(filePath, fields))
        .sort((exp1, exp2) => (exp1.priority > exp2.priority ? 1 : -1));

    return experiences;
};

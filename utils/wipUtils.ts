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

// find wip file paths
const WIP_PATHS = join(process.cwd(), "_wip");

// filter out only .mdx endings
function getWipFilePaths(): string[] {
    return (
        fs
            .readdirSync(WIP_PATHS)
            .filter((path) => /\.mdx?$/.test(path))
    );
};

// use graymatter to get frontmatter and content
export function getDate(slug: string): Project {
    const fullPath = join(WIP_PATHS, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { data, content };
};

// get items fromt frontmatter
export function getDateItems(filePath: string, fields: string[] = []) {
    const slug = filePath.replace(/\.mdx?$/, "");
    const { data, content } = getDate(slug);
    
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

export function getAllDates(fields: string[] = []): Items[] {
    const filePaths = getWipFilePaths();
    const projects = filePaths
        .map((filePath) => getDateItems(filePath, fields))
        .sort((date1, date2) => (date1.date > date2.date ? -1 : 1));

    return projects;
};

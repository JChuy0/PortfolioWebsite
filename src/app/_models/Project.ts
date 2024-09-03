import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    readme: string;
    description: string;
    projectLink: string;
    pictures: string[];
    topics: Tag[];
}
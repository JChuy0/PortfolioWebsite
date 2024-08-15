import { Tag } from "./Tag";

export interface Job {
    id: number;
    jobTitle: string;
    companyName: string;
    date: string;
    accomplishments: string[];
    tags: Tag[];
}
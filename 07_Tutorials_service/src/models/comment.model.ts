import type Author from "@/models/author.model";

export default interface Comment {
    id: number;
    content: string;
    author: Author;
}

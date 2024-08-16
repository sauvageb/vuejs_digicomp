import type Category from "@/models/category.model";
import type Author from "@/models/author.model";

export default interface Tutorial {
    id: number;
    title: string;
    description: string;
    content: string;
    createdAt: Date;
    author: Author;
    category: Category;
    comments: Comment[];
}

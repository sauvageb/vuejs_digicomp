import type Category from "@/models/category.model";
import type CreateCategory from "@/services/dto/createCategory.model";

class CategoryService {

    baseURL = 'http://localhost:3000/categories';

    async getAll(): Promise<Category[]> {
        const response: Response = await fetch(this.baseURL);
        return await response.json();
    }

    async create(category: CreateCategory) {
        const response: Response = await fetch(this.baseURL, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(category)
        });
        return await response.json();
    }
}

export default new CategoryService();

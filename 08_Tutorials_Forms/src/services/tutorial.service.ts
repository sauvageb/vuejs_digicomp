import type Tutorial from "@/models/tutorial.model";

class TutorialService {

    baseURL = 'http://localhost:3000/tutorials';

    async getAll(): Promise<Tutorial[]> {
        const response: Response = await fetch(this.baseURL);
        return await response.json();
    }
}

export default new TutorialService();

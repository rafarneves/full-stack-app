import { Request, Response } from "express";
import { ListTaskArchivedService } from "../../services/task/ListTaskArchivedService";

class ListTaskArchivedController {
    async handle(req: Request, res: Response) {

        
        const listByState = new ListTaskArchivedService();
        const tasks = await listByState.execute();

        return res.json(tasks)
    }
}

export { ListTaskArchivedController }
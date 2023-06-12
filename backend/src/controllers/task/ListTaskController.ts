import { Request, Response } from "express";
import { ListTaskService } from "../../services/task/ListTaskService";

class ListTaskController {
    async handle(req: Request, res: Response) {

        
        const listByState = new ListTaskService();
        const tasks = await listByState.execute();

        return res.json(tasks)
    }
}

export { ListTaskController }
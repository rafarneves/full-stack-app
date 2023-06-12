import { Request, Response } from "express";
import { CreateTaskService } from "../../services/task/CreateTaskService";
import getError from "../../utils/exceptionUtils";

class CreateTaskController {
    async handle(req: Request, res: Response) {

        const { title, description, state } = req.body;
        
        const createTaskService = new CreateTaskService();
        
        try {
            const task = await createTaskService.execute({
                title,
                description,
                state
            })
    
            return res.json(task);
        } catch (error) {
            let message = getError(error);
            return res.status(400).send({error: message})
        }
    }
}

export { CreateTaskController }
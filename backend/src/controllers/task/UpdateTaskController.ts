import { Request, Response } from "express";
import { UpdateTaskService } from "../../services/task/UpdateTaskService";
import getError from "../../utils/exceptionUtils";

class UpdateTaskController {
    async handle(req: Request, res: Response) {
        const { taskId, taskTitle, taskDescription, taskState } = req.body;

        const updateTaskService = new UpdateTaskService();

        try {
            const task = await updateTaskService.execute({
                taskId,
                taskTitle,
                taskDescription,
                taskState
            });
            return res.json(task);
        } catch (error) {
            let message = getError(error)
            return res.status(400).send({error: message})
        }
    }
}

export { UpdateTaskController }
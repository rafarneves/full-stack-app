import { Request, Response } from "express";
import { DetailTaskService } from "../../services/task/DetailTaskService";
import getError from "../../utils/exceptionUtils";

class DetailTaskController {
    async handle(req: Request, res: Response) {
        const taskId = parseInt(req.query.taskId as string);
        const detailTaskService = new DetailTaskService();

        try {
            const detailTask = await detailTaskService.execute({
                taskId
            })

            return res.json(detailTask);
        } catch (error) {
            let message = getError(error);
            return res.status(400).send({error: message});
        }
    }
}

export { DetailTaskController };
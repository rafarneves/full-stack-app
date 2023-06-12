import { Request, Response } from 'express';
import { ArchiveTaskService } from '../../services/task/ArchiveTaskService';
import getError from '../../utils/exceptionUtils';

class ArchiveTaskController {
    async handle(req: Request, res: Response) {
        const taskId = parseInt(req.query.taskId as string);
        const archiveTaskService = new ArchiveTaskService();
        
        try {
            const task = await archiveTaskService.execute({
                taskId
            });

            return res.json(task);
        } catch (error) {
            let message = getError(error);
            return res.status(400).send({error: message});
        }
    }
}

export { ArchiveTaskController }
import { TaskStatusEnum } from "@prisma/client";
import prismaClient from "../../prisma";

interface TaskProps {
    taskId: number
}

class ArchiveTaskService {
    async execute({taskId}: TaskProps) {
        const task = await prismaClient.task.findFirst({
            where: {
                id: taskId
            }
        });

        if(!task){
            throw new Error ("Entidade não encontrada!");          
        }

        if(task.state === TaskStatusEnum.ARQUIVADA) {
            throw new Error("Não é possível arquivar a tarefa!");
        }

        const updatedTask = await prismaClient.task.update({
            where: { id: taskId },
            data: {
                state: TaskStatusEnum.ARQUIVADA
            },
          })

        return updatedTask
    }
}

export { ArchiveTaskService }
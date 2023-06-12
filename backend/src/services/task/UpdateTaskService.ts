import { TaskStatusEnum } from "@prisma/client";
import prismaClient from "../../prisma";

interface TaskProps {
    taskId: number,
    taskTitle: string,
    taskDescription: string,
    taskState: TaskStatusEnum
}

class UpdateTaskService {
    async execute({taskId, taskTitle, taskDescription, taskState}: TaskProps) {

        const task = await prismaClient.task.findFirst({
            where: {
                id: taskId
            }
        });

        if(!task){
            throw new Error ("Entidade não encontrada!");          
        }

        const validStatuses = Object.values(TaskStatusEnum);

        if(!validStatuses.includes(taskState)){
            throw new Error ("Status inválido!"); 
        }        
        
        if(task.state === TaskStatusEnum.FINALIZADA || task.state === TaskStatusEnum.ARQUIVADA){
            throw new Error("Não é possível atualizar!");
        }

        const updatedTask = await prismaClient.task.update({
            where: { id: taskId },
            data: {
                title: taskTitle,
                description: taskDescription,
                state: taskState
            },
          })

        return updatedTask
    }
}

export { UpdateTaskService }
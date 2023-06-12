import { TaskStatusEnum } from "@prisma/client";
import prismaClient from "../../prisma";

interface TaskRequest {
    title: string,
    description: string,
    state: TaskStatusEnum
}

class CreateTaskService {
    async execute({title, description, state}: TaskRequest) {
        
        const validStatus = Object.values(TaskStatusEnum);

        if(!validStatus.includes(state)){
            throw new Error ("Status inválido!"); 
        }

        const task = await prismaClient.task.create({
            data: {
                title: title,
                description: description,
                state: state
            }
        })

        return task
    }
}

export { CreateTaskService }
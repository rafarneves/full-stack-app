import prismaClient from "../../prisma";

interface TaskProps {
    taskId: number
}

class DetailTaskService {
    async execute({ taskId }: TaskProps) {
        const task = await prismaClient.task.findFirst({
            where: {
                id: taskId
            }
        })

        return task;
    }
}

export { DetailTaskService }
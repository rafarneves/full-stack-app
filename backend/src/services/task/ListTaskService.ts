import prismaClient from "../../prisma";

class ListTaskService {
    async execute() {
        const findByState = await prismaClient.task.findMany({
            where: {
                state: {
                    not: 'ARQUIVADA'
                }
            },
            orderBy: {
                state: 'asc'
            }
        })

        return findByState;
    }
}

export { ListTaskService }
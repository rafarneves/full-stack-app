import prismaClient from "../../prisma";

class ListTaskArchivedService {
    async execute() {
        const findByState = await prismaClient.task.findMany({
            where: {
                description: "ARQUIVADA"
            }
        })

        return findByState;
    }
}

export { ListTaskArchivedService }
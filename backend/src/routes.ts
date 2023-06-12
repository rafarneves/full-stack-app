import { Router } from "express";

import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { ListTaskController } from "./controllers/task/ListTaskController";
import { UpdateTaskController } from "./controllers/task/UpdateTaskController";
import { ArchiveTaskController } from "./controllers/task/ArchiveTaskController";
import { DetailTaskController } from "./controllers/task/DetailTaskController";
import { ListTaskArchivedController } from "./controllers/task/ListTaskArchivedController";

const router = Router();

// create task
router.post('/task', new CreateTaskController().handle);

// get task
router.get('/tasks', new ListTaskController().handle);

// update task status
router.patch('/task', new UpdateTaskController().handle);

// task details
router.get('/task', new DetailTaskController().handle);

// archive task
router.patch('/task/archive', new ArchiveTaskController().handle);

// get tasks archiveds
router.get('/tasks/archived', new ListTaskArchivedController().handle);

export { router };
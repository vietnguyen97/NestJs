import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskById(id: string): Task {
  //   const result = this.tasks.find((task) => task.id === id);
  //   if (!result) {
  //     // do something
  //     throw new NotFoundException();
  //   }
  //   return result;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const idTask = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== idTask.id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}

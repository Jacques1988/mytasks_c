import { Injectable } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = tasks as Task[];
  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  updateTask(update: Task) {
    let updatedTask = this.tasks.find((task: Task) => task.id === update.id);
    
    let taskIndex = this.tasks.findIndex((task: Task) => task.id === update.id);
    this.tasks.splice(taskIndex, 1)
    this.tasks.splice(taskIndex, 0, updatedTask!)
  }

  createNewTask(newTask: string){
    const task = {
      id: this.tasks.length +1,
      task : newTask,
      status : "incomplete",
      checked: false
    }
    this.tasks.push(task as Task)
  }

  
  deleteTask(deleteTask: Task){
    let taskIndex = this.tasks.findIndex((task : Task) => task.id === deleteTask.id)
    this.tasks.splice(taskIndex, 1)
  }
}

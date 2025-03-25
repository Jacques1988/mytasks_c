import { Component, inject, } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { TaskListItemComponent } from "./task-list-item/task-list-item.component";
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TasksService)
  tasks = this.taskService.filteredTasks


  changeTaskStatus(task: Task){
    this.taskService.updateTask(task)
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task)
  }
}

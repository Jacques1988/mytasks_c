import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  taskInputReference = viewChild<ElementRef<HTMLInputElement>>('newTaskInput')
  tasksService = inject(TasksService)

  addNewTask(){
    const task = this.taskInputReference()!.nativeElement.value
    this.tasksService.createNewTask(task)
  }
}

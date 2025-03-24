import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-list-item',
  imports: [
    NgClass
  ],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
task = input.required<Task>()
toggleTaskEvent = output()
deleteTask = output()



toggleTask(){
  this.task().checked = !this.task().checked
  this.task().checked ? this.task().status = "completed" : this.task().status = "incomplete"
  this.toggleTaskEvent.emit()
}

delete(){
    this.deleteTask.emit()
}

}

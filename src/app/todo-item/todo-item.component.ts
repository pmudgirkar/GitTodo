import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo>= new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("on click has been triggered")
  }
  onCheckboxClick(todo: Todo | undefined){
    console.log(todo)
    this.todoCheckbox.emit(todo);
    console.log(todo)


  }

}





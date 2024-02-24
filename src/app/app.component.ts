import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from './myComponents/todos/todos.component'
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from './todo-item/todo-item.component'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent,CommonModule,TodoItemComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  desc= "Description";
  // constructor(){
  //   setTimeout(() => {
  //   this.title="changed title"
  // }, 5000 );
  // }
}

import { Component, input, output } from '@angular/core';
import { TodoItem } from '../TodoItem';

@Component({
    selector: 'app-todo-list',
    imports: [],
    templateUrl: './todo-list.html',
    styleUrl: './todo-list.scss',
})
export class TodoList {
    readonly todoItems = input.required<TodoItem[]>();

    readonly deleteButtonClick = output<string>();
}

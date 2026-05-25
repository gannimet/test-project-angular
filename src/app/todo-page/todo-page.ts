import { Component, signal } from '@angular/core';
import { TodoItem } from './TodoItem';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from './todo-list/todo-list';

@Component({
    selector: 'app-todo-page',
    imports: [TodoList, TodoForm],
    templateUrl: './todo-page.html',
    styleUrl: './todo-page.scss',
})
export class TodoPage {
    readonly todoItems = signal<TodoItem[]>([
        { id: 'a', name: 'React lernen' },
        { id: 'b', name: 'Angular lernen' },
    ]);

    addNewItem(newTodoItem: TodoItem) {
        this.todoItems.update((oldTodoItems) => {
            return [...oldTodoItems, newTodoItem];
        });
    }

    deleteButtonClicked(idToBeDeleted: string) {
        this.todoItems.update((oldTodoItems) => {
            return oldTodoItems.filter((oldItem) => oldItem.id !== idToBeDeleted);
        });
    }
}

import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoItem } from './TodoItem';

@Component({
    selector: 'app-todo-page',
    imports: [ReactiveFormsModule],
    templateUrl: './todo-page.html',
    styleUrl: './todo-page.scss',
})
export class TodoPage {
    readonly todoItems = signal<TodoItem[]>([
        { id: 'a', name: 'React lernen' },
        { id: 'b', name: 'Angular lernen' },
    ]);

    readonly newTodoCtrl = new FormControl('', { validators: [Validators.required] });
    readonly todoFormGroup = new FormGroup({
        todoCtrl: this.newTodoCtrl,
    });

    readonly newTodoInput = viewChild<ElementRef<HTMLInputElement>>('newTodoInput');

    todoFormSubmitted() {
        const newTodoName = this.newTodoCtrl.value;

        if (!newTodoName) {
            return;
        }

        const newTodoItem: TodoItem = { id: crypto.randomUUID(), name: newTodoName };

        this.todoItems.update((oldTodoItems) => {
            return [...oldTodoItems, newTodoItem];
        });

        this.newTodoCtrl.setValue('');
        this.newTodoInput()?.nativeElement.focus();
    }

    deleteButtonClicked(idToBeDeleted: string) {
        this.todoItems.update((oldTodoItems) => {
            return oldTodoItems.filter((oldItem) => oldItem.id !== idToBeDeleted);
        });
    }
}

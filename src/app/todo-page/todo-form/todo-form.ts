import { Component, ElementRef, output, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoItem } from '../TodoItem';

@Component({
    selector: 'app-todo-form',
    imports: [ReactiveFormsModule],
    templateUrl: './todo-form.html',
    styleUrl: './todo-form.scss',
})
export class TodoForm {
    readonly newTodoItemCreated = output<TodoItem>();

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

        this.newTodoItemCreated.emit(newTodoItem);

        this.newTodoCtrl.setValue('');
        this.newTodoInput()?.nativeElement.focus();
    }
}

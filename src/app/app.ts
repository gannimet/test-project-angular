import { Component, inject, signal } from '@angular/core';
import { RestService } from './rest.service';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    private readonly restService = inject(RestService);

    randomNumber = signal<number | undefined>(undefined);

    getRandomNumber() {
        this.restService.getRandomNumber().subscribe((result) => {
            this.randomNumber.set(result.value);
        });
    }
}

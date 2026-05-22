import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RestService } from './services/rest-api/rest.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
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

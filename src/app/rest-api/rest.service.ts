import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RestService {
    private readonly http = inject(HttpClient);

    getRandomNumber() {
        return this.http.get<{ value: number }>('http://localhost:3000/randomnumber');
    }
}

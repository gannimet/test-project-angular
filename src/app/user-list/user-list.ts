import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { RestService } from '../services/rest-api/rest.service';

@Component({
    selector: 'app-user-list',
    imports: [CommonModule, RouterModule],
    templateUrl: './user-list.html',
    styleUrl: './user-list.scss',
})
export class UserList {
    readonly restApi = inject(RestService);

    readonly users = toSignal(this.restApi.loadUserList(), { initialValue: [] });
}

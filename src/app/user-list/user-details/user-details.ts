import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { RestService } from '../../services/rest-api/rest.service';

@Component({
    selector: 'app-user-details',
    imports: [CommonModule],
    templateUrl: './user-details.html',
    styleUrl: './user-details.scss',
})
export class UserDetails {
    private readonly route = inject(ActivatedRoute);
    private readonly restApi = inject(RestService);

    // "Classic" way with observables and activated route
    readonly user$ = this.route.params.pipe(
        map((params) => params['id']),
        switchMap((id) => this.restApi.loadUserDetails(id)),
    );

    // "Modern" way with signals and component input binding
    readonly id = input.required<string>();

    readonly user = toSignal(
        toObservable(this.id).pipe(switchMap((id) => this.restApi.loadUserDetails(id))),
    );

    // "Hyper modern" way with rxResource
    readonly userResource = rxResource({
        params: () => ({ id: this.id() }),
        stream: ({ params: { id } }) => this.restApi.loadUserDetails(id),
    });
}

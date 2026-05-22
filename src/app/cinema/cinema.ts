import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-cinema',
    imports: [],
    templateUrl: './cinema.html',
    styleUrl: './cinema.scss',
})
export class Cinema {
    readonly numberOfRows = signal(10);
    readonly numberOfSeatsPerRow = signal(20);

    readonly rowIndices = computed(() => {
        return Array.from({ length: this.numberOfRows() }, (_, i) => i);
    });

    readonly seatIndices = computed(() => {
        return Array.from({ length: this.numberOfSeatsPerRow() }, (_, i) => i);
    });
}

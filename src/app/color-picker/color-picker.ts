import { Component, computed, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

type ColorData = {
    red: number;
    green: number;
    blue: number;
};

@Component({
    selector: 'app-color-picker',
    imports: [FormField],
    templateUrl: './color-picker.html',
    styleUrl: './color-picker.scss',
})
export class ColorPicker {
    readonly colorModel = signal<ColorData>({
        red: 255,
        green: 255,
        blue: 255,
    });

    readonly colorForm = form(this.colorModel);

    readonly colorString = computed(() => {
        const { red, green, blue } = this.colorModel();

        return `rgb(${red}, ${green}, ${blue})`;
    });
}

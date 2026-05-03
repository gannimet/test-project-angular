import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WebSocketConnector {
    private readonly webSocket: WebSocket;

    readonly isConnected = signal(false);
    readonly messageReceived = signal<string | undefined>(undefined);

    private constructor() {
        this.webSocket = new WebSocket('ws://localhost:3000');

        this.webSocket.onopen = () => {
            this.isConnected.set(true);
        };

        this.webSocket.onclose = () => {
            this.isConnected.set(false);
        };

        this.webSocket.onmessage = (event) => {
            this.messageReceived.set(event.data);
        };
    }
}

import { signal } from '@angular/core';

export class WebSocketConnector {
    private static instance?: WebSocketConnector;
    private readonly webSocket: WebSocket;

    isConnected = signal(false);
    messageReceived = signal<string | undefined>(undefined);

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

    static getInstance() {
        if (!this.instance) {
            this.instance = new WebSocketConnector();
        }

        return this.instance;
    }
}

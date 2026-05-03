import { Component, inject } from '@angular/core';
import { WebSocketConnector } from '../websocket/websocket-connector';

@Component({
    selector: 'app-chat',
    imports: [],
    templateUrl: './chat.html',
    styleUrl: './chat.scss',
})
export class Chat {
    readonly webSocketConnector = inject(WebSocketConnector);
}

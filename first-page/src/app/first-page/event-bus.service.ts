import { Injectable } from "@angular/core";

class EventBus {
    subscribers: Function[] = [];

    subscribe(cb: Function) {
        this.subscribers.push(cb);

        return () => {
            this.subscribers = this.subscribers.filter(c => c !== cb);
        };
    }

    publish(messageKey: string, data: any) {
        this.subscribers.forEach(cb => cb(messageKey, data));
    }
}

@Injectable({ providedIn: 'root' })
export class EventBusService {
    constructor() {
        if (!window['eventBus']) {
            window['eventBus'] = new EventBus();
        }
    }

    subscribe(cb: Function) {
        window['eventBus'].subscribe(cb);
    }

    publish(messageKey: string, data: any) {
        window['eventBus'].publish(messageKey, data);
    }
}
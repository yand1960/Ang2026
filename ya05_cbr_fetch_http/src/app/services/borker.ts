import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// Самописный брокер
@Injectable({providedIn: "root"})
export class Broker {
    private subscribers: Function[] = []

    subscribe(subscriber: Function) {
        this.subscribers.push(subscriber);
    }

    next(message: string) {
        this.subscribers.forEach(
            subscriber => subscriber(message)
        )
    }
}

// Использование готового класса Subject
@Injectable({providedIn: "root"})
export class Broker2 {
    subject = new Subject<string>();
}
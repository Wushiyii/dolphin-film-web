import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class RxjsService {
    private subject = new Subject<any>();

    isLoaded = false;

    sendMessage (message: string, data?: any) {
        this.subject.next({ text: message, data: data });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}

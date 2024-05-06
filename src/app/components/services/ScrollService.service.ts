import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    private sectionIdSource = new BehaviorSubject<string>('');

    sectionId$ = this.sectionIdSource.asObservable();

    emitSectionId(sectionId: string) {
        this.sectionIdSource.next(sectionId);
    }
}

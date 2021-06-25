import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private isLoading = new BehaviorSubject<boolean>(false);
    public readonly loading$ = this.isLoading.asObservable();

    constructor() {}

    show(): void {
        this.isLoading.next(true);
    }

    hide(): void {
        this.isLoading.next(false);
    }
}

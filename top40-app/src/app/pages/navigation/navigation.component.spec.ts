import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [NavigationComponent],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(NavigationComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

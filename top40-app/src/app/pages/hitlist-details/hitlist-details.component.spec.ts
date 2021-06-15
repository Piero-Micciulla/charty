import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitlistDetailsComponent } from './hitlist-details.component';

describe('HitlistDetailsComponent', () => {
    let component: HitlistDetailsComponent;
    let fixture: ComponentFixture<HitlistDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HitlistDetailsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HitlistDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

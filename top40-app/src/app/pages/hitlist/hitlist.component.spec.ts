import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitlistComponent } from './hitlist.component';

describe('HitlistComponent', () => {
    let component: HitlistComponent;
    let fixture: ComponentFixture<HitlistComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HitlistComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HitlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

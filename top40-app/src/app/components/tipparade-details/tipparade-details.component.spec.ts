import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipparadeDetailsComponent } from './tipparade-details.component';

describe('TipparadeDetailsComponent', () => {
  let component: TipparadeDetailsComponent;
  let fixture: ComponentFixture<TipparadeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipparadeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipparadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

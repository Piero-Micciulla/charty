import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipparadeComponent } from './tipparade.component';

describe('TipparadeComponent', () => {
  let component: TipparadeComponent;
  let fixture: ComponentFixture<TipparadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipparadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipparadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

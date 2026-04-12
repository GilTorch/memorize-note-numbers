import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesNumbersSheetComponent } from './degrees-numbers-sheet.component';

describe('DegreesNumbersSheetComponent', () => {
  let component: DegreesNumbersSheetComponent;
  let fixture: ComponentFixture<DegreesNumbersSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreesNumbersSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DegreesNumbersSheetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

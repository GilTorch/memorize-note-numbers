import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeNumberComponent } from './degree-key.component';

describe('DegreeNumberComponent', () => {
  let component: DegreeNumberComponent;
  let fixture: ComponentFixture<DegreeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DegreeNumberComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

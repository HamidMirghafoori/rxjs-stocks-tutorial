import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateLevelComponent } from './intermediate-level.component';

describe('IntermediateLevelComponent', () => {
  let component: IntermediateLevelComponent;
  let fixture: ComponentFixture<IntermediateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

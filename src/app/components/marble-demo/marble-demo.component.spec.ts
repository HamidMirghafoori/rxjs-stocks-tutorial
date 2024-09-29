import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleDemoComponent } from './marble-demo.component';

describe('MarbleDemoComponent', () => {
  let component: MarbleDemoComponent;
  let fixture: ComponentFixture<MarbleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarbleDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

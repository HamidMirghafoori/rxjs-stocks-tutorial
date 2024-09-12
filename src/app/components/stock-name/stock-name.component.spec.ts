import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNameComponent } from './stock-name.component';

describe('StockNameComponent', () => {
  let component: StockNameComponent;
  let fixture: ComponentFixture<StockNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

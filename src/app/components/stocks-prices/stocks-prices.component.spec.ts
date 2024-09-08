import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksPricesComponent } from './stocks-prices.component';

describe('StocksPricesComponent', () => {
  let component: StocksPricesComponent;
  let fixture: ComponentFixture<StocksPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksPricesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

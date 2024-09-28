import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailsListComponent } from './stock-details-list.component';

describe('StockDetailsListComponent', () => {
  let component: StockDetailsListComponent;
  let fixture: ComponentFixture<StockDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDetailsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

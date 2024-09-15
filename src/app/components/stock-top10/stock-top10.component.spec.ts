import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTop10Component } from './stock-top10.component';

describe('StockTop10Component', () => {
  let component: StockTop10Component;
  let fixture: ComponentFixture<StockTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTop10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

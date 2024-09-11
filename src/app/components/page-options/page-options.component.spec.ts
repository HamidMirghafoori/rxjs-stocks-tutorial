import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOptionsComponent } from './page-options.component';

describe('PageOptionsComponent', () => {
  let component: PageOptionsComponent;
  let fixture: ComponentFixture<PageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSellsMonthlyComponent } from './rep-sells-monthly.component';

describe('RepSellsMonthlyComponent', () => {
  let component: RepSellsMonthlyComponent;
  let fixture: ComponentFixture<RepSellsMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepSellsMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSellsMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

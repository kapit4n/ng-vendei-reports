import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSellsDailyComponent } from './rep-sells-daily.component';

describe('RepSellsDailyComponent', () => {
  let component: RepSellsDailyComponent;
  let fixture: ComponentFixture<RepSellsDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepSellsDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSellsDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

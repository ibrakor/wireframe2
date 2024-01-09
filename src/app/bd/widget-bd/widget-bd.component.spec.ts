import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBDComponent } from './widget-bd.component';

describe('WidgetBDComponent', () => {
  let component: WidgetBDComponent;
  let fixture: ComponentFixture<WidgetBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

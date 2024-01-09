import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTransferenciaComponent } from './widget-transferencia.component';

describe('WidgetTransferenciaComponent', () => {
  let component: WidgetTransferenciaComponent;
  let fixture: ComponentFixture<WidgetTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTransferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

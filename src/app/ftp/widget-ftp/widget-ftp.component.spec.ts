import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFTPComponent } from './widget-ftp.component';

describe('WidgetFTPComponent', () => {
  let component: WidgetFTPComponent;
  let fixture: ComponentFixture<WidgetFTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

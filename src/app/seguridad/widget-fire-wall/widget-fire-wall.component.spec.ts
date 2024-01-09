import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFireWallComponent } from './widget-fire-wall.component';

describe('WidgetFireWallComponent', () => {
  let component: WidgetFireWallComponent;
  let fixture: ComponentFixture<WidgetFireWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFireWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFireWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

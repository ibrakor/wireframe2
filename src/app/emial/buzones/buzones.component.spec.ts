import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonesComponent } from './buzones.component';

describe('BuzonesComponent', () => {
  let component: BuzonesComponent;
  let fixture: ComponentFixture<BuzonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

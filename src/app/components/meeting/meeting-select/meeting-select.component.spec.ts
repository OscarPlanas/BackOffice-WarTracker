import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSelectComponent } from './meeting-select.component';

describe('MeetingSelectComponent', () => {
  let component: MeetingSelectComponent;
  let fixture: ComponentFixture<MeetingSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

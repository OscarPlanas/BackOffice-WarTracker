import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentScreenComponent } from './comment-screen.component';

describe('CommentScreenComponent', () => {
  let component: CommentScreenComponent;
  let fixture: ComponentFixture<CommentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

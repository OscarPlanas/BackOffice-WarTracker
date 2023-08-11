import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSelectComponent } from './blog-select.component';

describe('BlogSelectComponent', () => {
  let component: BlogSelectComponent;
  let fixture: ComponentFixture<BlogSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

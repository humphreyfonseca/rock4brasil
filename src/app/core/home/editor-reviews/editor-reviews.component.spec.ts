import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorReviewsComponent } from './editor-reviews.component';

describe('EditorReviewsComponent', () => {
  let component: EditorReviewsComponent;
  let fixture: ComponentFixture<EditorReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

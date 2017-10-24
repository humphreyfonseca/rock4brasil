import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBoxListComponent } from './article-box-list.component';

describe('ArticleBoxListComponent', () => {
  let component: ArticleBoxListComponent;
  let fixture: ComponentFixture<ArticleBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

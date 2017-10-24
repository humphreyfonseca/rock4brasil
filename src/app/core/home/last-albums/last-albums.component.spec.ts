import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAlbumsComponent } from './last-albums.component';

describe('LastAlbumsComponent', () => {
  let component: LastAlbumsComponent;
  let fixture: ComponentFixture<LastAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

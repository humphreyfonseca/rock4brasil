import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicOnWebComponent } from './music-on-web.component';

describe('MusicOnWebComponent', () => {
  let component: MusicOnWebComponent;
  let fixture: ComponentFixture<MusicOnWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicOnWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicOnWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

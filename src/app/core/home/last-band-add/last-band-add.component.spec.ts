import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBandAddComponent } from './last-band-add.component';

describe('LastBandAddComponent', () => {
  let component: LastBandAddComponent;
  let fixture: ComponentFixture<LastBandAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastBandAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastBandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

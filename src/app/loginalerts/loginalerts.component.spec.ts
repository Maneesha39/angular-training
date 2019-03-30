import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginalertsComponent } from './loginalerts.component';

describe('LoginalertsComponent', () => {
  let component: LoginalertsComponent;
  let fixture: ComponentFixture<LoginalertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginalertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

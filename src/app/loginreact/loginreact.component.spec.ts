import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreactComponent } from './loginreact.component';

describe('LoginreactComponent', () => {
  let component: LoginreactComponent;
  let fixture: ComponentFixture<LoginreactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginreactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppModule} from '../../app.module';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [HttpClientTestingModule, AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set confirmPasswordMatch to true if password and confirm password are same', () => {
    component.signUpForm.value.password = 'hello@123';
    component.signUpForm.value.confirmPassword = 'hello@123';
    component.checkPasswords();
    expect(component.confirmPasswordMatch).toBe(true);
  });

  it('should set confirmPasswordMatch to false if password and confirm password are different', () => {
    component.signUpForm.value.password = 'hello@123';
    component.signUpForm.value.confirmPassword = 'hello@1234';
    component.checkPasswords();
    expect(component.confirmPasswordMatch).toBe(false);
  });
});

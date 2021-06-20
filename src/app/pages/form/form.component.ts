import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  emailPattern = '(?:[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*)@(?:(?:[a' +
    '-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?:[a-zA-Z0-9-]*[a-zA-Z]){2,})';
  passwordPattern = '(^(?=.*?[a-zA-Z])(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,15}$)';
  onlyNumbersPattern = '^[0-9]*$';
  confirmPasswordMatch = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    const name = '';
    const email = '';
    const username = '';
    const password = '';
    const confirmPassword = '';
    const contact = '';
    const address = '';

    this.signUpForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      email : new FormControl(email, [Validators.required, Validators.pattern(this.emailPattern)]),
      username : new FormControl(username, [Validators.required]),
      password : new FormControl(password, [Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmPassword : new FormControl(confirmPassword, [Validators.required]),
      contact : new FormControl(contact, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(this.onlyNumbersPattern)]),
      address : new FormControl(address, Validators.required)
    });
  }

  onSubmit(): void {
    this.http.post('https://payspective-f676f-default-rtdb.firebaseio.com/', this.signUpForm.value).subscribe((data) => {
      console.log(data);
    }, error => console.log(error));
  }

  checkPasswords(): void {
    this.confirmPasswordMatch = this.signUpForm.value.password === this.signUpForm.value.confirmPassword;
  }
}

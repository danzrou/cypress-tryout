import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = this.fb.group({
    user: [null, Validators.required],
    password: [null, Validators.required]
  });

  error = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.error = null;
    const { user, password } = this.login.getRawValue();
    if (user === 'user' && password === '123') {
      this.router.navigate(['home']);
    } else {
      this.error = 'User or password are incorrect';
    }
  }
}

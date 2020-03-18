import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;

  public loading: boolean;
  public error: string;

  constructor(
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  public submitForm(): void {
    this.loading = true;
    this.error = null;

    // @TODO - Uncomment when auth service is available
    // this.authService.login(this.getValue('emailAddress'), this.getValue('password')).subscribe(
    //   data => this.router.navigate(['/dashboard']),
    //   err => this.displayErrors(err)
    // );
    console.log('submitted login form!', this.getValue('emailAddress'), this.getValue('password'));
  }

  private displayErrors(error: Error) {
    this.error = error.message;
    this.loading = false;
  }

  private getValue(key: string): any {
    if (this.loginForm.contains(key)) {
      return this.loginForm.get(key).value;
    }

    throw new Error('Invalid form control key provided');
  }

}

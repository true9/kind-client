import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Helper from 'src/app/shared/models/helper.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public registrationForm: FormGroup;

  public loading: boolean;
  public error: string;

  constructor(
    private router: Router
  ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      partialPostcode: new FormControl('', [Validators.required]),
      contactPhone: new FormControl('', [Validators.required]),
      servicesProvided: new FormControl('', [Validators.required, Validators.minLength(10)]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  public submitForm(): void {
    this.loading = true;
    this.error = null;

    const helper: Helper = new Helper({
      name: this.getValue('name'),
      partialPostcode: this.getValue('partialPostcode'),
      contactPhone: this.getValue('contactPhone'),
      servicesProvided: this.getValue('servicesProvided'),
      emailAddress: this.getValue('emailAddress'),
      password: this.getValue('password')
    });

    // @TODO - Uncomment when auth service is available
    // this.authService.register(helper).subscribe(
    //   data => this.router.navigate(['/dashboard']),
    //   err => this.displayErrors(err)
    // );

    console.log('submitted registration form!', helper);
  }

  private displayErrors(error: Error) {
    this.error = error.message;
    this.loading = false;
  }

  private getValue(key: string): any {
    if (this.registrationForm.contains(key)) {
      return this.registrationForm.get(key).value;
    }

    throw new Error('Invalid form control key provided');
  }
}

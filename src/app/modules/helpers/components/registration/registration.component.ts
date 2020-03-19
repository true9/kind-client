import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Helper from 'src/app/shared/models/helper.model';
import { HelperService } from 'src/app/modules/helpers/services/helper.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public registrationForm: FormGroup;

  public loading: boolean;
  public success: boolean;
  public error: string;

  constructor(
    private router: Router,
    private helperService: HelperService
  ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      partialPostcode: new FormControl('', [Validators.required]),
      contactPhone: new FormControl('', [Validators.required]),
      servicesProvided: new FormControl('', [Validators.required, Validators.minLength(10)]),
      gdprConsent: new FormControl(false, [Validators.pattern('true')])
    });
  }

  public submitForm(): void {
    this.loading = true;
    this.success = null;
    this.error = null;

    const helper: Helper = new Helper({
      name: this.getValue('name'),
      partialPostcode: this.getValue('partialPostcode'),
      contactPhone: this.getValue('contactPhone'),
      servicesProvided: this.getValue('servicesProvided')
    });

    this.helperService.register(helper).subscribe(
      () => this.displaySuccess(),
      err => this.displayErrors(err)
    );
  }

  private displaySuccess() {
    this.success = true;
    this.loading = false;
  }

  private displayErrors(error: any) {
    this.error = error.error.message;
    this.loading = false;
  }

  private getValue(key: string): any {
    if (this.registrationForm.contains(key)) {
      return this.registrationForm.get(key).value;
    }

    throw new Error('Invalid form control key provided');
  }
}

import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/modules/helpers/services/helper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mobileNumberValidator } from 'src/app/modules/helpers/validators/mobile-number.validator';

@Component({
  selector: 'app-deregistration',
  templateUrl: './deregistration.component.html',
  styleUrls: ['./deregistration.component.scss']
})
export class DeregistrationComponent implements OnInit {

  public formStage: number;

  public deregistrationForm: FormGroup;
  public codeForm: FormGroup;

  public deRegistrationError: string;
  public codeError: string;

  constructor(
    private helperService: HelperService
  ) {
    this.formStage = 1;
  }

  ngOnInit(): void {
    this.deregistrationForm = new FormGroup({
      contactPhone: new FormControl(null, [Validators.required, mobileNumberValidator()])
    });

    this.codeForm = new FormGroup({
      code: new FormControl(null, [Validators.required])
    });
  }

  submitCodeRequest(): void {
    this.helperService.update(this.contactPhone.value).subscribe(
      () => this.formStage = 2,
      err => this.deRegistrationError = err.error.message
    );
  }

  submitCodeConfirmation(): void {
    this.helperService.delete(this.code.value).subscribe(
      () => this.formStage = 3,
      err => this.codeError = err.error.message
    );
  }

  get contactPhone() { return this.deregistrationForm.get('contactPhone'); }
  get code() { return this.codeForm.get('code'); }
}

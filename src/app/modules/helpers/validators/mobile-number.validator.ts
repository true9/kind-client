import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Syntax is an absolute eye melter, but in short we'll either return null meaning the value is ok,
 * or we'll return an object which marks the control "contactPhone" as invalid, then
 * returns the user's input back into the form so they're not fighting with it.
 */
export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value: string = control.value;

    if (!value) {
      return;
    }

    const ukFormat = value.startsWith('07');
    const intlFormat = value.startsWith('+44');

    if (ukFormat) {
      // Length can be 11 (without a space) or 12 characters (with a space), space will be stripped out on the API side
      if ((value.length === 11 || value.length === 12) && !value.match(/[^0-9\s]/g)) {
        return null;
      } else {
        return { contactPhone: { valid: false, value }};
      }
    }

    if (intlFormat) {
      if (value.length === 13 && !value.match(/[^0-9+]/g)) {
        return null;
      } else {
        return { contactPhone: { valid: false, value }};
      }
    }

    return { contactPhone: { valid: false, value }};
  };
}

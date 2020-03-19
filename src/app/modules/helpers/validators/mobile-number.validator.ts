import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Syntax is an absolute eye melter, but in short we'll either return null meaning the value is ok,
 * or we'll return an object which marks the control as contactPhone control as invalid
 * and returns the user's input back into the form so they're not fighting with it.
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
      if (value.length === 11 && !value.match(/[^0-9]/g)) {
        return null;
      } else {
        return { 'contactPhone': { 'valid': false, value }};
      }
    }

    if (intlFormat) {
      if (value.length === 13 && !value.match(/[^0-9+]/g)) {
        return null;
      } else {
        return { 'contactPhone': { 'valid': false, value }};
      }
    }

    return { 'contactPhone': { 'valid': false, value }};
  };
}

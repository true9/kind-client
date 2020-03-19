import { Component } from '@angular/core';
import Helper from 'src/app/shared/models/helper.model';
import { HelperService } from 'src/app/modules/helpers/services/helper.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent {

  public loading: boolean;
  public loaded: boolean;
  public postcode: string;
  public helpers: Helper[] = [];

  constructor(
    private helperService: HelperService
  ) { }

  public submitForm(): void {
    this.loading = true;
    this.helperService.postcodeLookup(this.postcode).subscribe(
      data => {
        this.helpers = data;
        this.loaded = true;
        this.loading = false;
      },
      err => {
        this.loaded = false;
        this.loading = false;
        console.error('nope', err);
      }
    );
  }

  public addPlaceholderHelper(): void {
    this.helpers.push(new Helper({
      name: 'Example McExample',
      partialPostcode: 'BD16',
      contactPhone: '01234567890',
      servicesProvided: 'Picking up groceries, cooking and cleaning',
    }));
  }

}

import { Component } from '@angular/core';
import Helper from 'src/app/shared/models/helper.model';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent {

  public postcode: string;
  public helpers: Helper[] = [];

  constructor() { }

  public addPlaceholderHelper(): void {
    this.helpers.push(new Helper({
      name: 'Example McExample',
      partialPostcode: 'BD16',
      contactPhone: '01234567890',
      servicesProvided: 'Picking up groceries, cooking and cleaning',
    }));
  }

}

import { Component } from '@angular/core';
import Helper from 'src/app/shared/models/helper.model';
import { HelperService } from 'src/app/modules/helpers/services/helper.service';
import HelperCacheService from 'src/app/modules/helpers/services/helper-cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent {

  public loading: boolean;
  public loaded: boolean;
  public postcode: string;
  public displayPostcode: string;
  public helpers: Helper[] = [];
  public emptyNotice: boolean;

  constructor(
    private helperService: HelperService,
    private router: Router
  ) {}

  public submitForm(): void {
    this.loading = true;
    this.helperService.postcodeLookup(this.postcode).subscribe(
      async data => {
        const cache = HelperCacheService.GetInstance();
        cache.setCache(data, this.postcode);
        this.loaded = true;
        this.loading = false;

        if (data.length !== 0) {
          await this.router.navigate(['/helpers', this.postcode]);
        }

        // Copy the value from this.postcode into a new variable via JSON parse/stringify hack
        // so we can display a postcode that doesn't change when the user updates the input
        this.displayPostcode = JSON.parse(JSON.stringify(this.postcode));
      },
      () => {
        this.loaded = false;
        this.loading = false;
      }
    );
  }
}

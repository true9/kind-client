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
  public helpers: Helper[] = [];

  constructor(
    private helperService: HelperService,
    private router: Router
  ) { }

  public submitForm(): void {
    this.loading = true;
    this.helperService.postcodeLookup(this.postcode).subscribe(
      async data => {
        const cache = HelperCacheService.GetInstance();
        cache.setCache(data, this.postcode);
        this.loaded = true;
        this.loading = false;

        await this.router.navigate(['/helpers', this.postcode]);
      },
      () => {
        this.loaded = false;
        this.loading = false;
      }
    );
  }
}

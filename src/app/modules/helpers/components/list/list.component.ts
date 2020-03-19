import { Component, OnInit } from '@angular/core';
import HelperCacheService from 'src/app/modules/helpers/services/helper-cache.service';
import Helper from 'src/app/shared/models/helper.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/modules/helpers/services/helper.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public helpers: Helper[];
  public postcode: string;

  public dots = '.';
  public fromCache: boolean;
  public loading: boolean;
  public loaded: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService
  ) {
    this.loading = false;
  }

  async ngOnInit(): Promise<void> {
    const cache = HelperCacheService.GetInstance().getCache();

    if (!cache) {
      this.postcode = this.activatedRoute.snapshot.paramMap.get('postcode').toUpperCase();
      this.loading = true;

      setInterval(() => {
        if (this.dots.length < 4) {
          this.dots += '.';
        } else {
          this.dots = '.';
        }
      }, 500);

      this.helperService.postcodeLookup(this.postcode).subscribe(
        data => {
          this.helpers = data;
          this.loaded = true;
          this.loading = false;
        }
      );
    } else {
      this.fromCache = true;
      this.loaded = true;
      this.helpers = cache.helpers;
      this.postcode = cache.postcode.toUpperCase();
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { environment as e } from './../../../../environments/environment';
import Helper from 'src/app/shared/models/helper.model';

@Injectable()
export class HelperService {

  constructor(
    private http: HttpClient
  ) { }

  public postcodeLookup(postcode: string): Observable<any> {
    return this.http.get(e.api.url('helpers/:postcode', { postcode } )).pipe(
      pluck('data')
    );
  }

  public register(helper: Helper): Observable<any> {
    return this.http.post(e.api.url('helpers'), helper);
  }

  public update(helper: Helper, identifier: string): Observable<any> {
    return this.http.put(e.api.url('helpers/:identifier', { identifier }), helper);
  }

  public delete(deregCode: string): Observable<any> {
    return this.http.delete(e.api.url('helpers/:deregCode', { deregCode }));
  }
}

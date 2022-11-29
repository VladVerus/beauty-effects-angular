import { Path } from './../models/path';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultConvert } from '../models/result';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private key = environment.envVar.PRIVATE_KEY;
  private url = environment.envVar.URL;

  private header = new HttpHeaders().set('apikey', this.key);

  constructor(private http: HttpClient) {}

  convert(from: string, to: string, amount: number): Observable<ResultConvert> {
    const params = new HttpParams()
      .set('to', to.toString())
      .set('from', from.toString())
      .set('amount', amount.toString());

    return this.http
      .get<ResultConvert>(this.getUrl('convert'), {
        headers: this.header,
        params,
      })
      .pipe(
        //? retry +1 times (2 in general)
        retry(1),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  private getUrl(key: keyof typeof Path): string {
    return this.url + Path[key];
  }
}

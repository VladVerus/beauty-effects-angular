import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private key = environment.envVar.PRIVATE_KEY;
  private url = environment.envVar.URL;

  private header = new HttpHeaders().set('apikey', this.key);

  convert(from: string, to: string, amount: number): Observable<number> {
    const params = new HttpParams()
      .set('to', to.toString())
      .set('from', from.toString())
      .set('amount', amount.toString());

    return this.http
      .get<number>(this.url + 'convert', {
        headers: this.header,
        params,
      })
      .pipe(
        retry(2),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
  constructor(private http: HttpClient) {}
}

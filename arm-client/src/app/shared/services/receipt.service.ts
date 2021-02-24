import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receipt } from '../models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  addReceipt(receipt: Receipt): Observable<any> {
    return this.http.post<Receipt>('http://localhost:7000/arm/add-receipt', receipt, this.httpOptions)
      .pipe(
        catchError(this.handleError<Receipt>('Add Receipt'))
      );
  }
  getReceiptList(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>('http://localhost:7000/arm/receipts')
      .pipe(tap(receipts => console.log('Find All Receipts')),
        catchError(this.handleError<Receipt[]>('Get Receipts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

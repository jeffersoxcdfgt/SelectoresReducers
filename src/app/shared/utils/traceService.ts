import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class TraceService {

  /*Constructor for get info*/
  constructor(private messageService: MessageService){}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a All Service message with the MessageService */
  public log(message: string): void {
    this.messageService.add(`Service: ${message}`);
  }

  public logMetaReducers(): void {
    console.log(`Esto es un webhook en angular`);
  }

}
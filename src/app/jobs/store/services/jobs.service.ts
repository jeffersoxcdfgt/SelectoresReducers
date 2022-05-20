import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Jobs } from '../../class/jobs';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class JobsService {
  protected URL =environment.apiUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<Jobs[]>{
    return this.http.get<Jobs[]>(`${this.URL}/api/jobs`).pipe(
        tap(_ => console.log('fetched jobs')),
        catchError(this.traceService.handleError<Jobs[]>('findAll'))
    );
  }
}
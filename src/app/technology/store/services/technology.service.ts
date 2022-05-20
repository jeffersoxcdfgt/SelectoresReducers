import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Technology } from '../../class/technology';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class TechnologyService {
  protected URL =environment.apiUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<Technology[]>{
    return this.http.get<Technology[]>(`${this.URL}/api/technology`).pipe(
        tap(_ => console.log('fetched techs')),
        catchError(this.traceService.handleError<Technology[]>('findAll'))
    );
  }
}
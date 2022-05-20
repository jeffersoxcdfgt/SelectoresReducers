
   
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { JobsService } from '../services/jobs.service';
import { JobsActionTypes } from '../actions/jobs.actions';
import { Jobs } from '../../class/jobs';

@Injectable()
export class JobsEffects {

  public selectJobs$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActionTypes.JOBS_LIST_ALL),
    mergeMap(() => this.jobsService.findAll()
      .pipe(
        map((listjobs:Jobs[]) => ({ 
            type: JobsActionTypes.JOBS_LIST_ALL_SUCCESS, 
            jobs: listjobs 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private jobsService: JobsService
  ) {}
}
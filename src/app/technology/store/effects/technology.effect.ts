
   
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TechnologyService } from '../services/technology.service';
import { TechnologyActionTypes } from '../actions/technology.actions';
import { Technology } from '../../class/technology';

@Injectable()
export class TechnologyEffects {

  public selectTechnologies$ = createEffect(() => this.actions$.pipe(
    ofType(TechnologyActionTypes.TECHNOLOGY_LIST_ALL),
    mergeMap(() => this.technologyService.findAll()
      .pipe(
        map((listtechs:Technology[]) => ({ 
            type: TechnologyActionTypes.TECHNOLOGY_LIST_ALL_SUCCESS, 
            technologies: listtechs 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private technologyService: TechnologyService
  ) {}
}
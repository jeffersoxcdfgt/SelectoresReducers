import { NgModule } from '@angular/core';
import { technologyRoutedComponents , technologyRoutingModule} from './technology-routing.module';
import {  ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../app.in-memory.api';
import { EffectsModule } from '@ngrx/effects';
import { TechnologyService} from './store/services/technology.service';
import * as technologyReducers from './store/reducers/technology.reducer';
import { TechnologyEffects } from './store/effects/technology.effect';
import { TraceService } from '../shared/utils/traceService';

/*Include jobs */
import * as jobsReducers from '../jobs/store/reducers/jobs.reducer';
import { JobsService } from '../jobs/store/services/jobs.service';
import { JobsEffects } from '../jobs/store/effects/jobs.effect';

@NgModule({
  imports:[
    CommonModule,
    technologyRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AppInMemoryApi),
    StoreModule.forFeature('technology',technologyReducers.reducer),
    StoreModule.forFeature('jobs',jobsReducers.reducer),
    EffectsModule.forFeature([
        TechnologyEffects,
        JobsEffects
    ]),
  ],
  declarations:[technologyRoutedComponents],
  providers: [
    TechnologyService,
    JobsService,
    TraceService,
  ]
})
export class TechnologyModule {

}
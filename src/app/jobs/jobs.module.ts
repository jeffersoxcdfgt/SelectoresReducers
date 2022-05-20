import { NgModule } from '@angular/core';
import { jobsRoutedComponents , jobsRoutingModule} from './jobs-routing.module';
import {  ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../app.in-memory.api';
import { EffectsModule } from '@ngrx/effects';
import { JobsService} from './store/services/jobs.service';
import * as jobsReducers from './store/reducers/jobs.reducer';
import { JobsEffects } from './store/effects/jobs.effect';
import { TraceService } from '../shared/utils/traceService';

@NgModule({
  imports:[
    CommonModule,
    jobsRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AppInMemoryApi),
    StoreModule.forFeature('jobs',jobsReducers.reducer),
    EffectsModule.forFeature([JobsEffects]),
  ],
  declarations:[jobsRoutedComponents],
  providers: [
    JobsService,
    TraceService,
  ]
})
export class JobsModule {

}
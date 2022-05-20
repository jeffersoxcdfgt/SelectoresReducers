import * as fromTechnologies from './technology/store/reducers/technology.reducer';
import * as fromJobs from './jobs/store/reducers/jobs.reducer';

export interface AppState {
  technology:fromTechnologies.State;
  jobs:fromJobs.State;
}
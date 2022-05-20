import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Jobs } from '../../class/jobs';
import * as JobsActions from '../actions/jobs.actions';

export interface State extends EntityState<Jobs> {
  // additional entities state properties
  selectedJobsId: string | null;
}

export const adapter: EntityAdapter<Jobs> = createEntityAdapter<Jobs>();
export const selectJobsState = createFeatureSelector<State>('jobs');


export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedJobsId: null,
});

const jobsReducer = createReducer(
  initialState,
  on(JobsActions.addJob, (state, { job }) => {
    return adapter.addOne(job, state)
  }),
  on(JobsActions.setJob, (state, { job }) => {
    return adapter.setOne(job, state)
  }),
  on(JobsActions.upsertJob, (state, { job }) => {
    return adapter.upsertOne(job, state);
  }),
  on(JobsActions.addJobs, (state, { jobs }) => {
    return adapter.addMany(jobs, state);
  }),
  on(JobsActions.upsertJobs, (state, { jobs }) => {
    return adapter.upsertMany(jobs, state);
  }),
  on(JobsActions.updateJob, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(JobsActions.updateJobs, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(JobsActions.mapJob, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(JobsActions.mapJobs, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(JobsActions.deleteJob, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(JobsActions.deleteJobs, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(JobsActions.deleteJobsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(JobsActions.loadJobs, (state, { jobs }) => {
    return adapter.setAll(jobs, state);
  }),
  on(JobsActions.setJobs, (state, { jobs }) => {
    return adapter.setMany(jobs, state);
  }),
  on(JobsActions.clearJobs, state => {
    return adapter.removeAll({ ...state, selecteJobId: null });
  }),
  on(JobsActions.selectJobsList, state => {
    return state
  })
);

export function reducer(state: State | undefined, action: Action) {
  return jobsReducer(state, action);
}

export const getSelectedJobId = (state: State) => state.selectedJobsId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectJobsState);

// select the array of Jobs ids
export const selectJobsIds = selectIds;

// select the dictionary of Job entities
export const selectJobsEntities = selectEntities;

// select the array of Jobs
export const selectAllJobs = selectAll;

// select the total Job count
export const selectJobTotal = selectTotal;


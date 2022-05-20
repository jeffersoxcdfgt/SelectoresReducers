import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Jobs } from '../../class/jobs';

export enum JobsActionTypes {
  JOBS_LIST_ALL ='[Jobs/API] Init list jobs',
  JOBS_LIST_ALL_SUCCESS ='[Jobs/API] Load jobs'}


export const setJobs = createAction('[Jobs/API] Set Jobs', props<{ jobs: Jobs[] }>());
export const addJob = createAction('[Job/API] Add Job', props<{ job: Jobs }>());
export const setJob = createAction('[Job/API] Set Job', props<{ job: Jobs }>());
export const upsertJob = createAction('[Job/API] Upsert Job', props<{ job: Jobs }>());
export const addJobs = createAction('[Job/API] Add Jobs', props<{ jobs: Jobs[] }>());
export const upsertJobs = createAction('[Job/API] Upsert Jobs', props<{ jobs: Jobs[] }>());
export const updateJob = createAction('[Job/API] Update Job', props<{ update: Update<Jobs> }>());
export const updateJobs = createAction('[Job/API] Update Jobs', props<{ updates: Update<Jobs>[] }>());
export const mapJob = createAction('[Job/API] Map Job', props<{ entityMap: EntityMapOne<Jobs> }>());
export const mapJobs = createAction('[Job/API] Map Jobs', props<{ entityMap: EntityMap<Jobs> }>());
export const deleteJob = createAction('[Job/API] Delete Job', props<{ id: string }>());
export const deleteJobs = createAction('[Jobs/API] Delete Jobs', props<{ ids: string[] }>());
export const deleteJobsByPredicate = createAction('[Jobs/API] Delete Jobs By Predicate', props<{ predicate: Predicate<Jobs> }>());
export const clearJobs = createAction('[Jobs/API] Clear Jobs');
export const selectJobsList = createAction(JobsActionTypes.JOBS_LIST_ALL);
export const loadJobs = createAction(JobsActionTypes.JOBS_LIST_ALL_SUCCESS, props<{ jobs: Jobs[] }>());
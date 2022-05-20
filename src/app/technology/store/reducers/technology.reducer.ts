import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Technology } from '../../class/technology';
import * as TechnologyActions from '../actions/technology.actions';
import { selectAllJobs } from 'src/app/jobs/store/reducers/jobs.reducer';
import { Jobs } from 'src/app/jobs/class/jobs';
import { joinJobsAndTecnologies } from '../../utils/functions';

export interface State extends EntityState<Technology> {
  // additional entities state properties
  selectedTechnologyId: string | null;
}

export const adapter: EntityAdapter<Technology> = createEntityAdapter<Technology>();
export const selectTechnologyState = createFeatureSelector<State>('technology');


export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedTechnologyId: null,
});

const technologyReducer = createReducer(
  initialState,
  on(TechnologyActions.addTechnology, (state, { technology }) => {
    return adapter.addOne(technology, state)
  }),
  on(TechnologyActions.setTechnology, (state, { technology }) => {
    return adapter.setOne(technology, state)
  }),
  on(TechnologyActions.upsertTechnology, (state, { technology }) => {
    return adapter.upsertOne(technology, state);
  }),
  on(TechnologyActions.addTechnologies, (state, { technologies }) => {
    return adapter.addMany(technologies, state);
  }),
  on(TechnologyActions.upsertTechnologies, (state, { technologies }) => {
    return adapter.upsertMany(technologies, state);
  }),
  on(TechnologyActions.updateTechnology, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(TechnologyActions.updateTechnologies, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(TechnologyActions.mapTechnology, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(TechnologyActions.mapTechnologies, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(TechnologyActions.deleteTechnology, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(TechnologyActions.deleteTechnologies, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(TechnologyActions.deleteTechnologiesByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(TechnologyActions.loadTechnologies, (state, { technologies }) => {
    return adapter.setAll(technologies, state);
  }),
  on(TechnologyActions.setTechnologies, (state, { technologies }) => {
    return adapter.setMany(technologies, state);
  }),
  on(TechnologyActions.clearTechnologies, state => {
    return adapter.removeAll({ ...state, selectedTechnologyId: null });
  }),
  on(TechnologyActions.selectTechnologiesList, state => {
    return state
  })
);

export function reducer(state: State | undefined, action: Action) {
  return technologyReducer(state, action);
}

export const getSelectedTechnologyId = (state: State) => state.selectedTechnologyId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectTechnologyState);

// select the array of Technology ids
export const selectTechnologyIds = selectIds;

// select the dictionary of Technology entities
export const selectTechnologyEntities = selectEntities;

// select the array of Technologies
export const selectAllTechnologies = selectAll;

// select the total Technology count
export const selectTechnologyTotal = selectTotal;


// Join common information

export const selectedTecnologisWithJobs = createSelector(
  selectAllJobs,
  selectAllTechnologies,
  (jobs: Jobs[], technologies: Technology[]) =>joinJobsAndTecnologies(jobs,technologies));


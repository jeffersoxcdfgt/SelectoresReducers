import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Technology } from '../../class/technology';

export enum TechnologyActionTypes {
  TECHNOLOGY_LIST_ALL ='[Technology/Technology] Init list technology',
  TECHNOLOGY_LIST_ALL_SUCCESS ='[Technology/API] Load Technologies'}


export const setTechnologies = createAction('[Technology/API] Set Technologies', props<{ technologies: Technology[] }>());
export const addTechnology = createAction('[Technology/API] Add Technology', props<{ technology: Technology }>());
export const setTechnology = createAction('[Technology/API] Set Technology', props<{ technology: Technology }>());
export const upsertTechnology = createAction('[Technology/API] Upsert Technology', props<{ technology: Technology }>());
export const addTechnologies = createAction('[Technology/API] Add Technologies', props<{ technologies: Technology[] }>());
export const upsertTechnologies = createAction('[Technology/API] Upsert Technologies', props<{ technologies: Technology[] }>());
export const updateTechnology = createAction('[Technology/API] Update Technology', props<{ update: Update<Technology> }>());
export const updateTechnologies = createAction('[Technology/API] Update Technologies', props<{ updates: Update<Technology>[] }>());
export const mapTechnology = createAction('[Technology/API] Map Technology', props<{ entityMap: EntityMapOne<Technology> }>());
export const mapTechnologies = createAction('[Technology/API] Map Technologies', props<{ entityMap: EntityMap<Technology> }>());
export const deleteTechnology = createAction('[Technology/API] Delete Technology', props<{ id: string }>());
export const deleteTechnologies = createAction('[Technology/API] Delete Technologies', props<{ ids: string[] }>());
export const deleteTechnologiesByPredicate = createAction('[Technology/API] Delete Technologies By Predicate', props<{ predicate: Predicate<Technology> }>());
export const clearTechnologies = createAction('[Technology/API] Clear Technologies');
export const selectTechnologiesList = createAction(TechnologyActionTypes.TECHNOLOGY_LIST_ALL);
export const loadTechnologies = createAction(TechnologyActionTypes.TECHNOLOGY_LIST_ALL_SUCCESS, props<{ technologies: Technology[] }>());
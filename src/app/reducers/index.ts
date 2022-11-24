import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { Key } from '../models/keys';
import { environment } from '../../environments/environment';
import { ISideMenuState, sideNavReducer } from './sidemenu';

export interface State {
  [Key.SIDENAV]: ISideMenuState;
}

export const reducers: ActionReducerMap<State> = {
  [Key.SIDENAV]: sideNavReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { Key } from '../models/keys';

export const toggle = createAction(`[${Key.SIDENAV.toUpperCase()}] toggle`);

export interface ISideMenuState {
  isShow: boolean;
}

const initialState: ISideMenuState = {
  isShow: false,
};

export const sideNavReducer = createReducer(
  initialState,

  on(toggle, (state) => ({
    ...state,
    isShow: !state.isShow,
  }))
);

export const featureSelector = createFeatureSelector<ISideMenuState>(
  Key.SIDENAV
);

export const isShowSideNavSelector = createSelector(
  featureSelector,
  (state) => state.isShow
);

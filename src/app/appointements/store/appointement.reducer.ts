import * as appointementActions from "./appointement.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Appointement } from "../appointement";
import * as fromRoot from "../store/store";

export interface AppointementState extends EntityState<Appointement> {
    selectedAppointementId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}
export interface AppState extends fromRoot.StoreInterface {
    appointements: AppointementState;
}
export const appointementAdapter: EntityAdapter<Appointement> = createEntityAdapter<
    Appointement
>();
export const defaultAppointement: AppointementState = {
    ids: [],
    entities: {},
    selectedAppointementId: null,
    loading: false,
    loaded: false,
    error: ""
};
export const initialState = appointementAdapter.getInitialState(defaultAppointement);
export function appointementReducer(
    state = initialState,
    action: appointementActions.Action
): AppointementState {
    switch (action.type) {
        case appointementActions.AppointementActionTypes.LOAD_APPOINTEMENTS_SUCCESS: {
            return appointementAdapter.addAll(action.playload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case appointementActions.AppointementActionTypes.LOAD_APPOINTEMENTS_FAILED: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.playload
            };
        }
        case appointementActions.AppointementActionTypes.LOAD_APPOINTEMENT_SUCCESS: {
            return appointementAdapter.addOne(action.payload, {
                ...state,
                selectedAppointementId: action.payload.id
            });
        }
        case appointementActions.AppointementActionTypes.LOAD_APPOINTEMENT_FAILED: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

const getAppointementFeatureState = createFeatureSelector<AppointementState>(
    "appointements"
);
export const getAppointement = createSelector(
    getAppointementFeatureState,
    appointementAdapter.getSelectors().selectAll
);

export const getAppointementsLoading = createSelector(
    getAppointementFeatureState,
    (state: AppointementState) => state.loading
);

export const getAppointementsLoaded = createSelector(
    getAppointementFeatureState,
    (state: AppointementState) => state.loaded
);

export const getError = createSelector(
    getAppointementFeatureState,
    (state: AppointementState) => state.error
);

export const getCurrentAppointementId = createSelector(
    getAppointementFeatureState,
    (state: AppointementState) => state.selectedAppointementId
);
export const getCurrentAppointement = createSelector(
    getAppointementFeatureState,
    getCurrentAppointementId,
    state => state.entities[state.selectedAppointementId]
);

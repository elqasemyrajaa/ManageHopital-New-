import { Action } from '@ngrx/store'
import { Appointement } from '../appointement'
import { Update } from '@ngrx/entity';

export enum AppointementActionTypes {
    LOAD_APPOINTEMENTS = "[appointement] Load Appointements",
    LOAD_APPOINTEMENTS_SUCCESS = "[appointement] Load Appointements Success",
    LOAD_APPOINTEMENTS_FAILED = "[appointement] Load Appointements Failed",
    LOAD_APPOINTEMENT = "[appointement] Load Appointement",
    LOAD_APPOINTEMENT_SUCCESS = "[appointement] Load Appointement Success",
    LOAD_APPOINTEMENT_FAILED = "[appointement] Load Appointement Failed"
}
export class LoadAppointements implements Action {
    readonly type = AppointementActionTypes.LOAD_APPOINTEMENTS
}
export class LoadAppointementsSuccess implements Action {
    readonly type = AppointementActionTypes.LOAD_APPOINTEMENTS_SUCCESS
    constructor(public playload: Appointement[]) {
    }
}
export class LoadAppointementsFailed implements Action {
    readonly type = AppointementActionTypes.LOAD_APPOINTEMENTS_FAILED
    constructor(public playload: string) { }
}
export class LoadAppointement implements Action {
    readonly type = AppointementActionTypes.LOAD_APPOINTEMENT;

    constructor(public payload: number) { }
}

export class LoadAppointementSuccess implements Action {
    readonly type = AppointementActionTypes.LOAD_APPOINTEMENT_SUCCESS;

    constructor(public payload: Appointement) { }
}

export class LoadAppointementFail implements Action {
    readonly type = AppointementActionTypes.LOAD_APPOINTEMENT_FAILED;

    constructor(public payload: string) { }
}
export type Action =
    LoadAppointements
    | LoadAppointementsSuccess
    | LoadAppointementsFailed
    | LoadAppointement
    | LoadAppointementSuccess
    | LoadAppointementFail
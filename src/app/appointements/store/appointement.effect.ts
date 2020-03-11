import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AppointementService } from "../appointement.service";
import * as appsActions from "../store/appointement.actions";
import { Appointement } from "../appointement";

@Injectable()
export class AppointementEffect {
    constructor(
        private actions$: Actions,
        private AppointementService: AppointementService
    ) { }
    @Effect()
    loadAppointements$: Observable<Action> = this.actions$.pipe(
        ofType<appsActions.LoadAppointements>(
            appsActions.AppointementActionTypes.LOAD_APPOINTEMENTS
        ),
        mergeMap((action: appsActions.LoadAppointements) =>
            this.AppointementService.getApps().pipe(
                map(
                    (appointements: Appointement[]) =>
                        new appsActions.LoadAppointementsSuccess(appointements)
                ),
                catchError(err => of(new appsActions.LoadAppointementsFailed(err)))
            )
        )
    );
    //   @Effect()
    //   loadApp$: Observable<Action> = this.actions$.pipe(
    //     ofType<appsActions.LoadAppointement>(
    //         appsActions.AppointementActionTypes.LOAD_APPOINTEMENT
    //     ),
    //     mergeMap((action: appsActions.LoadAppointement) =>
    //       this.AppointementService.get(action.payload).pipe(
    //         map(
    //           (patient: Patients) =>
    //             new patientActions.LoadPatientSuccess(patient)
    //         ),
    //         catchError(err => of(new patientActions.LoadPatientFail(err)))
    //       )
    //     )
    //   );
}
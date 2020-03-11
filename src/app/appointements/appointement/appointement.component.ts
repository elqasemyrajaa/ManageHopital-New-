import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appsAppointement from '../store/appointement.actions'
import { Observable } from 'rxjs';
import { Appointement } from '../appointement';
import * as AppsActions from "../store/appointement.actions"
import * as fromApp from "../store/appointement.reducer";

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {
  apps$
  error$: Observable<String>;
  constructor(private store: Store<fromApp.AppState>) {
    this.store.dispatch(new AppsActions.LoadAppointements());
    // this.apps$ = this.store.pipe(select(fromApp.getAppointement));
    // this.error$ = this.store.pipe(select(fromApp.getError));
    this.store.subscribe(data => this.apps$ = data.appointements.entities)
    console.log("apps", this.apps$)
  }
  ngOnInit() {
  }
}

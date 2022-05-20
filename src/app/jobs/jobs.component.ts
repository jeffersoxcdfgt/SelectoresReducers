import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectJobsList } from './store/actions/jobs.actions';

@Component({
  selector: 'app-jobs',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(private store :Store<AppState>,) { }

  ngOnInit(): void {
    this.store.dispatch(selectJobsList());
 }

}

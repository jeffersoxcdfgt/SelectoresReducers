import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectJobsList } from '../jobs/store/actions/jobs.actions';
import { selectTechnologiesList } from './store/actions/technology.actions';

@Component({
  selector: 'app-technology',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  constructor(private store :Store<AppState>,) { }

  ngOnInit(): void {
    this.store.dispatch(selectJobsList());
    this.store.dispatch(selectTechnologiesList());
  }
}

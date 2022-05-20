import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Jobs } from '../class/jobs';
import { selectAllJobs } from '../store/reducers/jobs.reducer';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  jobs : Observable<Jobs[]> =  of<Jobs[]>()

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {
    this.jobs =this.store.select(selectAllJobs)
  }

}

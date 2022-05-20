import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Jobs } from 'src/app/jobs/class/jobs';
import { selectAllJobs } from 'src/app/jobs/store/reducers/jobs.reducer';
import { Technology } from '../class/technology';
import { selectAllTechnologies, selectedTecnologisWithJobs } from '../store/reducers/technology.reducer';

@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.scss']
})
export class TechnologyListComponent implements OnInit {

  technologies : Observable<Technology[]> =  of<Technology[]>()
  jobs : Observable<Jobs[]> =  of<Jobs[]>()
  jobsAndTechs : Observable<any[]> =  of<any[]>()

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {
    this.technologies =this.store.select(selectAllTechnologies);
    this.jobs = this.store.select(selectAllJobs);
    this.jobsAndTechs =  this.store.select(selectedTecnologisWithJobs);    

  }

}

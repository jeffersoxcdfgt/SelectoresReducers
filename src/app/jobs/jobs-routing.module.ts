import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component' ;

const jobsRoutes : Routes  =  <Routes>[{
  path:'',
  component :JobsComponent,
  children:[
    { path:'' , component:  JobsListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(jobsRoutes)
  ],
  exports:[RouterModule]
})
export class jobsRoutingModule {
}

export const jobsRoutedComponents = [
    JobsComponent,
    JobsListComponent
]
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path:'' , redirectTo:'/technology' , pathMatch:'full'},
  {
    path:'technology',
    loadChildren: () => import('./technology/technology.module').then(h => h.TechnologyModule)
  },
  {
    path:'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(h => h.JobsModule)
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
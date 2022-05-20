import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { TechnologyComponent } from './technology.component';
import { TechnologyListComponent } from './technology-list/technology-list.component' ;

const technologyRoutes : Routes  =  <Routes>[{
  path:'',
  component :TechnologyComponent,
  children:[
    { path:'' , component:  TechnologyListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(technologyRoutes)
  ],
  exports:[RouterModule]
})
export class technologyRoutingModule {
}

export const technologyRoutedComponents = [
    TechnologyComponent,
    TechnologyListComponent
]
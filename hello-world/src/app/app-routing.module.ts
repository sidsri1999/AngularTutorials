import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Is it not duplicate that we are importing same component in app module ts and here, so let's create 
// one array of all the components we have imported here and directly put those in declaration array of app module ts
import { Test91Component } from './test91/test91.component';
import { Test92Component } from './test92/test92.component';
import { Test921Component } from './test921/test921.component';
import { Test922Component } from './test922/test922.component';

// This will contain the url and the component to be rendered during that hit
const routes: Routes = [
  // if the path is empty, then we are going to redirect to test91 component
  {path: '', redirectTo: '/test91', pathMatch: 'full'},
  {path:'test91', component: Test91Component},
  {path:'test92', component: Test92Component},
  // route param
  {path:'test92/:id', component: Test92Component ,
  children:[
    {path: 'test921', component: Test921Component},
    {path: 'test922', component: Test922Component}
  ]
  },
  // WildCard Routes.
  // This is always to be the last, we configure routes as most specific to top and least specific to bottom.
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// This we are going to pass to app module ts
export const routingComponents = [
  Test91Component,
  Test92Component, 
  PageNotFoundComponent,
  Test921Component,
  Test922Component
];

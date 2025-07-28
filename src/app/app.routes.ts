import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Series } from './components/series/series';
import { Presentation } from './components/exo1/exo1';
import { Blocks } from './pages/blocks/blocks';

const routes: Routes = [
    { path: 'series', component: Series },
    { path: 'counter', component: Presentation },
    { path: '', redirectTo: '/series', pathMatch: 'full' }, // optionnel : redirige vers /series
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
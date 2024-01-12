import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

export const routes: Routes = [
  { path: 'screen1', component: Screen1Component },
  { path: 'screen2', component: Screen2Component },
  { path: '', redirectTo: '/screen1', pathMatch: 'full' },
];
@NgModule({
    declarations: [
      Screen1Component,
      Screen2Component
    ],
    imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}

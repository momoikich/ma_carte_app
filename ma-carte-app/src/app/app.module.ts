/// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
  { path: 'screen1', component: Screen1Component },
  { path: 'screen2', component: Screen2Component },
  { path: '', redirectTo: '/screen1', pathMatch: 'full' }, // Rediriger vers screen1 par défaut
  // ... autres routes si nécessaire
];

@NgModule({
  declarations: [
    AgmCoreModule,
    Screen1Component,
    Screen2Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),
    AgmCoreModule.forRoot(),],
  providers : [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// app.module.ts




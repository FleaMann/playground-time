import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeComponent } from './life/life.component';
import { PhotographyComponent } from './photography/photography.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {path: 'life', component: LifeComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'calendar', component: CalendarComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

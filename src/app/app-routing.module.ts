import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './features/faculty/faculty.component';
import { GradComponent } from './features/grad/grad.component';
import { HomeComponent } from './features/home/home.component';
import { UndergradComponent } from './features/undergrad/undergrad.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'faculty',
    component: FacultyComponent,
  },
  {
    path: 'undergrad',
    component: UndergradComponent,
  },
  {
    path: 'grad',
    component: GradComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

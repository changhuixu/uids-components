import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './features/faculty/faculty.component';
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
    loadChildren: () =>
      import('./features/grad/grad.module').then((m) => m.GradModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

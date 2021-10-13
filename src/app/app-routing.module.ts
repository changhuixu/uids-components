import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { FacultyComponent } from './features/faculty/faculty.component';
import { HomeComponent } from './features/home/home.component';
import { NewsComponent } from './features/news/news.component';
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
  {
    path: 'outreach',
    loadChildren: () =>
      import('./features/outreach/outreach.module').then(
        (m) => m.OutreachModule
      ),
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

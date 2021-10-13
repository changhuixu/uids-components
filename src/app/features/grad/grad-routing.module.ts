import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { OverviewComponent } from './overview/overview.component';
import { PhdComponent } from './phd/phd.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'phd',
        component: PhdComponent,
      },
      {
        path: 'master',
        component: MasterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { K12Component } from './k12/k12.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'k12', component: K12Component },
  { path: 'community', component: CommunityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutreachRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutreachRoutingModule } from './outreach-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { K12Component } from './k12/k12.component';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [OverviewComponent, K12Component, CommunityComponent],
  imports: [CommonModule, OutreachRoutingModule],
})
export class OutreachModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradRoutingModule } from './grad-routing.module';
import { PhdComponent } from './phd/phd.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    PhdComponent,
    MasterComponent,
    HomeComponent,
    OverviewComponent,
  ],
  imports: [CommonModule, GradRoutingModule],
})
export class GradModule {}

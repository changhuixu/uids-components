import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UidsIowaBarFullComponent } from './uids-iowa-bar-full/uids-iowa-bar-full.component';
import { UidsFooterComponent } from './uids-footer/uids-footer.component';
import { UidsIowaBarNarrowComponent } from './uids-iowa-bar-narrow/uids-iowa-bar-narrow.component';

@NgModule({
  declarations: [
    AppComponent,
    UidsIowaBarFullComponent,
    UidsFooterComponent,
    UidsIowaBarNarrowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

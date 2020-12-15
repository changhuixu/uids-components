import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UidsIowaBarComponent } from './uids-iowa-bar/uids-iowa-bar.component';
import { UidsFooterComponent } from './uids-footer/uids-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UidsIowaBarComponent,
    UidsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UidsIowaBarFullComponent } from './uids-iowa-bar-full/uids-iowa-bar-full.component';
import { UidsFooterComponent } from './uids-footer/uids-footer.component';
import { UidsIowaBarNarrowComponent } from './uids-iowa-bar-narrow/uids-iowa-bar-narrow.component';
import { UidsIowaBarComponent } from './uids-iowa-bar/uids-iowa-bar.component';
import { UsernameDropdownComponent } from './username-dropdown/username-dropdown.component';
import { UiowaHeaderComponent } from './uiowa-header/uiowa-header.component';
import { HomeComponent } from './features/home/home.component';
import { FacultyComponent } from './features/faculty/faculty.component';
import { UndergradComponent } from './features/undergrad/undergrad.component';
import { GradComponent } from './features/grad/grad.component';

@NgModule({
  declarations: [
    AppComponent,
    UidsIowaBarFullComponent,
    UidsFooterComponent,
    UidsIowaBarNarrowComponent,
    UidsIowaBarComponent,
    UsernameDropdownComponent,
    UiowaHeaderComponent,
    HomeComponent,
    FacultyComponent,
    UndergradComponent,
    GradComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

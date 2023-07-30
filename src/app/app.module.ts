import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

// Import Angular Material modules
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventScreenComponent } from './components/event-screen/event-screen.component';
//import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { CreateSerieComponent } from './create-serie/create-serie.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { SeriesUpdateComponent } from './components/series-update/series-update.component';
import { EventsUpdateComponent } from './components/events-update/events-update.component';
import { BlogScreenComponent } from './components/blog/blog-screen/blog-screen.component';
import { MeetingScreenComponent } from './components/meeting/meeting-screen/meeting-screen.component';
import { UserScreenComponent } from './components/user/user-screen/user-screen.component';
import { ReportScreenComponent } from './components/report/report-screen/report-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClickOutsideDirective,
    HomeComponent,
    CreateEventComponent,
    EventScreenComponent,
    //UsersUpdateComponent,
    CreateSerieComponent,
    SeriesListComponent,
    ReportsListComponent,
    SeriesUpdateComponent,
    EventsUpdateComponent,
    BlogScreenComponent,
    MeetingScreenComponent,
    UserScreenComponent,
    ReportScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule, // Add MatTooltipModule to the imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

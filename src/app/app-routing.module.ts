import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'event-screen', component: EventScreenComponent },
  //{ path: 'users-update/:_id', component: UsersUpdateComponent },
  { path: 'create-serie', component: CreateSerieComponent },
  { path: 'series-list', component: SeriesListComponent},
  { path: 'reports-list', component: ReportsListComponent},
  { path: 'series-update/:_id', component: SeriesUpdateComponent},
  { path: 'events-update/:_id', component: EventsUpdateComponent},
  { path: 'blog-screen', component: BlogScreenComponent},
  { path: 'meeting-screen', component: MeetingScreenComponent},
  { path: 'user-screen', component: UserScreenComponent},
  { path: 'report-screen', component: ReportScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

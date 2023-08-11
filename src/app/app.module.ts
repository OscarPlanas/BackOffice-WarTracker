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
import { BlogScreenComponent } from './components/blog/blog-screen/blog-screen.component';
import { MeetingScreenComponent } from './components/meeting/meeting-screen/meeting-screen.component';
import { UserScreenComponent } from './components/user/user-screen/user-screen.component';
import { ReportScreenComponent } from './components/report/report-screen/report-screen.component';
import { CommentScreenComponent } from './components/comment/comment-screen/comment-screen.component';
import { UserSelectComponent } from './components/user/user-select/user-select.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { BlogSelectComponent } from './components/blog/blog-select/blog-select.component';
import { MeetingSelectComponent } from './components/meeting/meeting-select/meeting-select.component';
import { MeetingCreateComponent } from './components/meeting/meeting-create/meeting-create.component';
import { BlogCreateComponent } from './components/blog/blog-create/blog-create.component';
import { BlogUpdateComponent } from './components/blog/blog-update/blog-update.component';
import { MeetingUpdateComponent } from './components/meeting/meeting-update/meeting-update.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClickOutsideDirective,
    HomeComponent,
    BlogScreenComponent,
    MeetingScreenComponent,
    UserScreenComponent,
    ReportScreenComponent,
    CommentScreenComponent,
    UserSelectComponent,
    UserCreateComponent,
    BlogSelectComponent,
    MeetingSelectComponent,
    MeetingCreateComponent,
    BlogCreateComponent,
    BlogUpdateComponent,
    MeetingUpdateComponent,
    UserUpdateComponent,
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

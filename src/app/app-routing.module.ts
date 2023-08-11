import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog-screen', component: BlogScreenComponent},
  { path: 'meeting-screen', component: MeetingScreenComponent},
  { path: 'user-screen', component: UserScreenComponent},
  { path: 'comment-screen', component: CommentScreenComponent},
  { path: 'report-screen', component: ReportScreenComponent},
  { path: 'user-select', component: UserSelectComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: 'blog-select', component: BlogSelectComponent},
  { path: 'meeting-select', component: MeetingSelectComponent},
  { path: 'meeting-create', component: MeetingCreateComponent},
  { path: 'blog-create', component: BlogCreateComponent},
  { path: 'blog-update/:_id', component: BlogUpdateComponent},
  { path: 'meeting-update/:_id', component: MeetingUpdateComponent},
  { path: 'user-update/:_id', component: UserUpdateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

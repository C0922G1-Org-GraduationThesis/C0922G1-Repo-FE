import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountModule} from './component/account/account.module';
import {DocumentModule} from './component/document/document.module';
import {NotificationModule} from './component/notification/notification.module';
import {ProgressModule} from './component/progress/progress.module';
import {ProjectModule} from './component/project/project.module';
import {SharedModule} from './component/shared/shared.module';
import {StudentModule} from './component/student/student.module';
import {TeacherModule} from './component/teacher/teacher.module';
import {TopicModule} from './component/topic/topic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    DocumentModule,
    NotificationModule,
    ProgressModule,
    ProjectModule,
    SharedModule,
    StudentModule,
    TeacherModule,
    TopicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

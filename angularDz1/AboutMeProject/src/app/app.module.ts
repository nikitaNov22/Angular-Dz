import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentComponent } from './components/app-component/app-component.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentComponent,
    WorkExperienceComponent,
    QualificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KidssummercampComponent } from './kidssummercamp/kidssummercamp.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisternowComponent } from './registernow/registernow.component';
import { ProgramsComponent } from './programs/programs.component';
import { MoreinformationComponent } from './moreinformation/moreinformation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    KidssummercampComponent,
    HomeComponent,
    CoursesComponent,
    RegisternowComponent,
    ProgramsComponent,
    MoreinformationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

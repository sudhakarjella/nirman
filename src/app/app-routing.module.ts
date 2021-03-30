import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { KidssummercampComponent } from './kidssummercamp/kidssummercamp.component';
import { LoginComponent } from './login/login.component';
import { MoreinformationComponent } from './moreinformation/moreinformation.component';
import { ProgramsComponent } from './programs/programs.component';
import { RegisternowComponent } from './registernow/registernow.component';

const routes: Routes = [
  {path:"kidssummercamp",component:KidssummercampComponent},
  {path:"home",component:HomeComponent},
  {path:"courses",component:CoursesComponent},
  {path:"registernow",component:RegisternowComponent},
  {path:"programs",component:ProgramsComponent},
  {path:"moreinformation",component:MoreinformationComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

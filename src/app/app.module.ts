import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { PupilModule } from './pupil/pupil.module';
import { TeacherDetailsComponent } from './teachers/teacher-details/teacher-details.component';
import { TeachersModule } from './teachers/teachers.module';

const routes: Routes = [
  { path: '', component: TeacherDetailsComponent, pathMatch: "full" }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    EmployeesModule,
    PupilModule,
    TeachersModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

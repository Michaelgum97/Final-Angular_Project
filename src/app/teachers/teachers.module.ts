import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'teachers', component: TeacherDetailsComponent},
  { path: 'teachers/:id', component: TeachersEditComponent}
]
@NgModule({
  declarations: [
    TeacherDetailsComponent,
    TeachersEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TeachersRoutingModule,
    FormsModule
  ]
})
export class TeachersModule { }
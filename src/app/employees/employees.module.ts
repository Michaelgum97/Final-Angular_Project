import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employees', component: EmployeesDetailsComponent}
]
@NgModule({
  declarations: [
    EmployeesDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }

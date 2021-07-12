import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilRoutingModule } from './pupil-routing.module';
import { PupilEditComponent } from './pupil-edit/pupil-edit.component';
import { PupilDetailsComponent } from './pupil-details/pupil-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'pupils', component: PupilDetailsComponent},
  { path: 'pupils/:id', component: PupilEditComponent}
]
@NgModule({
  declarations: [
    PupilEditComponent,
    PupilDetailsComponent
  ],
  imports: [
    CommonModule,
    PupilRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PupilModule { }
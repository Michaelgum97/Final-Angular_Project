import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { subscribeOn, switchMap } from 'rxjs/operators';
import { study_room } from 'src/app/app.model';
import { teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers-edit',
  templateUrl: './teachers-edit.component.html',
  styleUrls: ['./teachers-edit.component.css']
})
export class TeachersEditComponent implements OnInit {
  teacherEdit: Observable<teacher>;
  objTeacher: teacher;
  homeRoom: Observable<study_room[]>;
  constructor(private teacherservice:TeacherService, private AR:ActivatedRoute) { }

  ngOnInit(): void {
    this.teacherEdit = this.AR.paramMap.pipe
    (
      switchMap(p => this.teacherservice.getTeacherById(p.get("id")))
    )
    this.teacherEdit.subscribe(t => this.objTeacher = t)
    this.homeRoom = this.teacherservice.getAllClasses();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { study_room } from 'src/app/app.model';
import { pupil, classSubject } from '../pupil.model';
import { StudentsService } from '../pupil.service';

@Component({
  selector: 'app-pupil-edit',
  templateUrl: './pupil-edit.component.html',
  styleUrls: ['./pupil-edit.component.css']
})
export class PupilEditComponent implements OnInit {
  pupilEdit: Observable<pupil>;
  objPupil: pupil;
  classEdit: Observable<study_room[]>;
  objClass: study_room;
  classSub: classSubject[];
  checkbox: {};

  constructor(private studentService: StudentsService, private activityRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pupilEdit = this.activityRoute.paramMap.pipe
    (
      switchMap(p => this.studentService.getStudentByID(p.get("id")))
    )
    this.pupilEdit.subscribe(s => this.objPupil = s);
    this.objClass=this.objPupil.classRoom;
    this.classSub=this.objPupil.lessonAndGrade;
    this.classEdit=this.studentService.getAllClasses();
    this.checkbox={[this.objClass.id]: true};
  }
  addGrade(){
    this.classSub.push({name: "", grade: 0});
  }
  removeGrade(event){
    this.classSub=this.classSub.filter(c=>c.name != event.target.value);
  }
  chooseClass(event){
    this.classEdit.subscribe(c=>this.objClass=c.find(k=>k.id == event.target.value));
  }
}
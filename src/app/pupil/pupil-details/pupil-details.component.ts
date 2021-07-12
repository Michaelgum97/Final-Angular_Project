import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pupil } from '../pupil.model';
import { StudentsService } from '../pupil.service';

@Component({
  selector: 'app-pupil-details',
  templateUrl: './pupil-details.component.html',
  styleUrls: ['./pupil-details.component.css']
})
export class PupilDetailsComponent implements OnInit {
  information: Observable<pupil[]>
  color={};
  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.information = this.studentsService.getAllStudents();
  }
  averageGrade(pupil){
    let count=0;
    pupil.lessonAndGrade.forEach(i=>count+=Number(i.grade));
    let average = Math.round(count/pupil.lessonAndGrade.length);
    let result = average < 65 ? "table-danger": "table-primary";
    this.color={...this.color, [pupil.id]:{result: result, average: average}};
    return this.color[pupil.id].result;
  }
}

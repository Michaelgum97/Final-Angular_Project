import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employees/employee.service';
import { employees } from 'src/app/employees/employees.model';
import { pupil } from 'src/app/pupil/pupil.model';
import { StudentsService } from 'src/app/pupil/pupil.service';
import { teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  information: Observable<teacher[]>;
  teacherCount: number;
  informationStudents: Observable<pupil[]>;
  studentCount: number;
  informationEmployees: Observable<employees[]>;
  employeeCount: number;
  constructor(private teacherservice:TeacherService, private student:StudentsService, private employees:EmployeeService) { }

  ngOnInit(): void {
    this.information = this.teacherservice.getAllTeachers();
    this.information.subscribe(t => this.teacherCount = t.length);
    this.informationStudents = this.student.getAllStudents();
    this.informationStudents.subscribe(s => this.studentCount = s.length);
    this.informationEmployees = this.employees.getAllEmployees();
    this.informationEmployees.subscribe(e => this.employeeCount = e.length);
  }
}

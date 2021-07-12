import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { employees } from '../employees.model';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {
  information: Observable<employees[]>
  color={};
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.information=this.empService.getAllEmployees();
  }
  Wage(employees){
    let w = employees.workHours * employees.hourlyWage;
    let result = w < 3000 ? "table-danger": "table-primary";
    this.color={...this.color, [employees.id]:{result: result, w: w}};
    return this.color[employees.id].result;
  }
}

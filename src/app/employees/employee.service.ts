import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { objEmployees } from './dummy-data-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getAllEmployees(){
    return of(objEmployees)
  }
  getEmployeesByID(id: string | number){
    return this.getAllEmployees()
    .pipe(map(e => e.find(E => E.id === id)))
  }
}

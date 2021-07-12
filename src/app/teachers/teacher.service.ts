import { Injectable } from '@angular/core';
import { objTeachers } from './dummy-data-teachers';
import { objClass } from '../dummy-data-class';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor() { }
  getAllTeachers(){
    return of(objTeachers);
  }
  getAllClasses(){
    return of(objClass);
  }
  getTeacherById(id: string | number) {
    return this.getAllTeachers()
    .pipe(map(t => t.find(T => T.id === id)))
  }
}

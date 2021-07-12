import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { objClass } from '../dummy-data-class';
import { students } from './dummy-data-pupil';

@Injectable({
    providedIn: 'root'
})
export class StudentsService{
    constructor() { }
    getAllStudents(){
        return of(students);
    }
    getAllClasses(){
        return of(objClass);
    }
    getStudentByID(id: string | number){
        return this.getAllStudents()
        .pipe(map(s => s.find(S => S.id === id)))
    }
}
import { person, study_room } from "../app.model";
export class pupil extends person{
    public classRoom: study_room;
    public lessonAndGrade: classSubject[];
    constructor(
        id: string, full_name: string, age: number, hometown: string, photo: string,
        classRoom: study_room, lessonAndGrade: classSubject[]=[]){
        super(id, full_name, age, hometown, photo);
        this.classRoom=classRoom;
        this.lessonAndGrade=lessonAndGrade;
    }
}
export interface classSubject{
    name: string;
    grade: number;
}
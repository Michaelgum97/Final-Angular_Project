import { teacher } from "./teachers/teacher.model";
export class person {
    public id: string;
    public full_name: string;
    public age: number;
    public hometown: string;
    public photo: string;
    constructor(id: string, full_name: string, age: number, hometown: string, photo: string){
        this.id=id;
        this.full_name=full_name;
        this.age=age;
        this.hometown=hometown;
        this.photo=photo;
    }
}
export class study_room {
    public id: string;
    public studyRoomName: string;
    public mainTeacher: teacher;
    public studentNumber: number;
    public innerAddress: string;
    constructor(id: string, studyRoomName: string, mainTeacher: teacher, studentNumber: number, innerAddress: string){
        this.id=id;
        this.studyRoomName=studyRoomName;
        this.mainTeacher=mainTeacher;
        this.studentNumber=studentNumber;
        this.innerAddress=innerAddress;
    }
}
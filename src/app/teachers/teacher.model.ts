import { person,study_room } from "../app.model";
export class teacher extends person {
    public profession: string;
    public listOfClasses: study_room[];
    public yearsOfExperience: number;
    public monthlyWorkHours: number;
    public hourlySalary: number;
    constructor(id: string, full_name: string, age: number, hometown: string, photo: string,
        profession: string, yearsOfExperience: number, monthlyWorkHours: number, hourlySalary: number, listOfClasses: study_room[]=[]) {
            super(id, full_name, age, hometown, photo);
            this.profession=profession;
            this.listOfClasses=listOfClasses;
            this.yearsOfExperience=yearsOfExperience;
            this.monthlyWorkHours=monthlyWorkHours;
            this.hourlySalary=hourlySalary;
        }
}
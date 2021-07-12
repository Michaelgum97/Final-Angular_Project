import { person } from "../app.model";
export class employees extends person{
    public jobName: string;
    public workHours: number;
    public hourlyWage: number;
    constructor(
        id: string, full_name: string, age: number, hometown: string, photo: string,
        jobName: string, workHours: number, hourlyWage: number){
            super(id, full_name, age, hometown, photo);
            this.jobName=jobName;
            this.workHours=workHours;
            this.hourlyWage=hourlyWage;
        }
}
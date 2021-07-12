import { study_room } from "./app.model";
import { objTeachers } from "./teachers/dummy-data-teachers";
export const objClass = [
    new study_room("1", "Reason", objTeachers[0], 15, "room 1"),
    new study_room("2", "Bows", objTeachers[1], 15, "room 2"),
    new study_room("3", "Swords", objTeachers[2], 15, "room 3"),
]
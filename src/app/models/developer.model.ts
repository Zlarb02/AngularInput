import { Skill } from "./skill.model";

export class Developer {

    // lastName de type string
    // firstName de type string
    // age de type number
    // gender de type string
    // bio de type string
    // skills est un tableau de type Skill

    constructor(
        public lastName: string,
        public firstName: string,
        public age: number,
        public gender: string,
        public bio: string,
        public skills: Skill[]
    ) {
    }
}
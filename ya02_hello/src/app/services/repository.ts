import { Injectable } from "@angular/core";


export class Person {
    firstName: string  = "";
    lastName: string = "";
    job: string = "";

    constructor (fisrtName: string, lastName: string, job: string) {
        this.firstName = fisrtName;
        this.lastName = lastName;
        this.job = job;
    }
}

//@Injectable()
export class Repository {
    getPeople(): Person[] {
        let people: Person[] = [];
        //симулируем данные
        people.push(new Person("Yuri","Andrienko","trainer"));
        people.push(new Person("Dmitry","Pisarevsky","student"));
        people.push(new Person("Maxim","Kulikov","student"));

        return people;
    }
}
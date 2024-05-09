export class student {

    name : string ;
    constructor(name : string) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + "myname is " + this.name);
    }
}
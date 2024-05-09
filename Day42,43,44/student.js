"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
var student = /** @class */ (function () {
    function student(name) {
        this.name = name;
    }
    student.prototype.greet = function () {
        console.log("Hello " + "myname is " + this.name);
    };
    return student;
}());
exports.student = student;

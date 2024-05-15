// Question 133: Write a JavaScript object and convert it into a JSON string.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var student1 = {
    name: "Maheen",
    rollNo: 17,
    age: 16
};
var jsonString1 = JSON.stringify(student1);
console.log(jsonString1);
// Question 134: Take a JSON string and parse it into a JavaScript object.
var jsonString2 = "{\n    \"name\" : \"Iqra\",\n    \"rollNo\"  : 21,\n    \"age\": 20\n}";
var student2 = JSON.parse(jsonString2);
console.log(student2);
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var person = {
    name: "Maryam",
    city: "Karachi",
    age: 20
};
var jsonString3 = JSON.stringify(person, null, 2);
console.log(jsonString3);
// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (var i = 0; i < 10; i++) {
    console.log("Iteration ".concat(i, ", i value:, i"));
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
try {
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message);
}
;
//   Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
console.log("Before Breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After Breakpoint");
//   Question 139: List three reserved words in JavaScript and create a valid use case for each.
var num = 2;
console.log(typeof num);
function sum(num1, num2) {
    return num1 + num2;
}
;
sum(2, 6);
// reserved words 'let', 'typeof', and 'return'.
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// let let:number = 9;   // It cause a syntax error
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
function fetchSomething() {
    return "Simulated data";
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchSomething()];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");

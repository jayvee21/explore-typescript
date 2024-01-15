"use strict";
// 
/**
 * JavaScript has three very commonly used primitives: string, number, and boolean
 * - string represents string values like "Hello, world"
 * - number is for numbers like 42. JavaScript does not have a special runtime value for integers,
 * so there’s no equivalent to int or float - everything is simply number
 * boolean is for the two values true and false
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.primitives = void 0;
async function primitives(age) {
    // Type annotation on variables
    let name = "alice";
    let atRightAge = age > 18 ? true : false;
    console.log(`Annotation on variables: ${name} is ${age} years old and`.concat(atRightAge ? ' at the ' : ' not in the ').concat('right age to drive.'));
    // Array
    let rows = [1, 2, 3, 4];
    let persons = ["alice", "Jacob"];
    console.log(`Annotation on Array: collection of rows: `.concat(rows.join(",")).concat(`\nPersons: ${persons.join(",")}`));
    // Function return types annotation
    function getAgeNumber() {
        return 26;
    }
    console.log('Function return types:'.concat(`\nAge: ${getAgeNumber()}`));
    // Functions Which Return Promises
    async function getAgePromise() {
        return 21;
    }
    let agePromise = await getAgePromise();
    console.log(`Functions Which Return Promises\n`.concat(`Age from promise: ${agePromise}`));
    return;
}
exports.primitives = primitives;
//# sourceMappingURL=types.js.map
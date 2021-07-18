'use strict';

// scope
function calAge(birthYear) {
    const age = 2021 - birthYear;
    function printAge() {
        const output = `${firstName}, you are ${age} Years old. Born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const str = `oh and you are a millenial, ${firstName}`;
            console.log(str)
            function add(a,b){
                return a +b;
            }
            console.log(add(1,2));
        }

    }
    printAge();
    return age;
}

const firstName = "Wilson";
calAge(1994);

// hoisting
console.log(me);
console.log(job);
console.log(year);
var me = "Wilson";
let job = "Full stack developer";
const year = 1999;

'use strict';

function calAge(birthYear) {
    const age = 2021 - birthYear;
    function printAge() {
        const output = `${firstName}, you are ${age} Years old. Born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const str = `oh and you are a millenial, ${firstName}`;
            console.log(str)
        }
    }
    printAge();
    return age;
}

const firstName = "Wilson";
calAge(1994);
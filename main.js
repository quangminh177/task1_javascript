// Excercise 2
// function displayMaxTemperatures(array) {
//     let output = [];

//     for (let index in array) {
//         if (array.hasOwnProperty(index)) {
//             let day = Number.parseFloat(index) + 1;
//             let result = `${array[index]}ºC in ${day} days`;
//             output.push(result);
//         }
//     }
//     return output.join('...')
// }

// let maxTemp1 = [17, 21, 23];
// let maxTemp2 = [28, 29, 30, 31, 32]

// console.log(displayMaxTemperatures(maxTemp1));
// console.log(displayMaxTemperatures(maxTemp2));

// Excercise 1

function convertCamelCase(string) {
    string = string.toLowerCase();
    for (let key in string) {
        let index = Number.parseFloat(key);
        if (string[index] === '_') {
            string = string.replace('_', '');
            string = string.slice(0,index) + string.charAt(index).toUpperCase() + string.slice(index + 1) ;
        }
    }
    return string;
}

let myString1 = 'delayed_departure';

console.log(convertCamelCase(myString1));

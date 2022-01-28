/*
1. Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'
*/

let string = "ddd@bbb@ccc";
let result = string.replace(/@/g, "!");
console.log(result);

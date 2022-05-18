type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

//js
// function readonly(obj) {
//     const result = {};

//     for(const key in obj) {
//         result['readonly' + key] = obj[key];
//     }

//     return result;
// }

// 1. return a obj
// 2. foreach key in obj
// 3. add readonly + key to result
// 4. get value in obj through key
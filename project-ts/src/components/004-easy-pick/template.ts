type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// if in js will be

// function myPick (obj, keys) {
//     const result = {};

//     for (const key in obj) {
//         if (keys.includes(key)) {
//             result[key] = obj[key];
//         }
//     }

//     return result;
// }

// return a obj
// foreach key in obj: [P in K]
// get value: T[P]
// make sure that P is key of T: K extends keyof T
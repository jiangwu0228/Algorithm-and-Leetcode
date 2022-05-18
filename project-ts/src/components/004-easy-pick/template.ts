type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// return a obj
// foreach key in obj: [P in K]
// get value: T[P]
// make sure that P is key of T: K extends keyof T
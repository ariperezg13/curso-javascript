// Destructuring and Spreading

// Sintaxis en arrays

let numbers = [1, 2, 3, 4, 5];

// Desestructuración
let [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

let[a=0, b=0,c=0,d=0,e=0,f=0] = numbers;    
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 0 (default value)

let[primero, ,tercero] = numbers;
console.log(primero); // 1
console.log(tercero); // 3

// Desestructuración con objetos
let person = {
    name: "John Doe",
    age: 30,
    email: "johndoe@gmail.com",
    alias: "johndoe"
}

let { name, age, email, alias } = person;

let{name: fullName, age: years, ...resto } = person;

//Destructuracion con objetos anidados
let user = {
    id: 1,
    profile: {
        username: "johndoe",
        details: {
            firstName: "John",
            lastName: "Doe"
        }
    }
};

let { id, profile: { username, details: { firstName, lastName } } } = user;

console.log(id); // 1
console.log(username); // johndoe
console.log(firstName); // John
console.log(lastName); // Doe
console.log(fullName); // John Doe
console.log(years); // 30
console.log(resto); // { email: '

// Propagación 

let newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]
// 6, 7, 8]
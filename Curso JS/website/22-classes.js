

class Person {
    constructor(name, age,alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person = new Person("John", 30,"Johnny");
console.log(person.name);


//Valores por defecto

class DefaultPerson {
    constructor(name = "Jane", age = 25, alias="Janie") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

console.log(new DefaultPerson().name); // Jane
console.log(new DefaultPerson("Alice").name); // Alice
console.log(new DefaultPerson("Bob", 40).age); // 40
console.log(new DefaultPerson("Charlie", 35,"Chuck").alias); // Chuck


// Funciones dentro de clases

class PersonWithGreet {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    greet() {
        return `Hello, my name is ${this.name}, but you can call me ${this.alias}. I am ${this.age} years old.`;
    }
}

let personWithGreet = new PersonWithGreet("John", 30,"Johnny");
console.log(personWithGreet.greet());

// Propiedades privadas

class PrivatePerson {
    #name;
    #age;
    #alias;
    constructor(name, age, alias) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
    }
    greet() {
        return `Hello, my name is ${this.#name}, but you can call me ${this.#alias}. I am ${this.#age} years old.`;
    }
}

let privatePerson = new PrivatePerson("John", 30,"Johnny");
console.log(privatePerson.greet());
// console.log(privatePerson.#name); // Error: Private field '#name' must be declared in an enclosing class

// Getters y Setters

class GetPerson {
    #name
    #age
    #alias
    constructor(name, age, alias) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
    }

    get name(){
        return this.#name;
    }
}

let getPerson = new GetPerson("John", 30,"Johnny");
console.log(getPerson.name); // John
// getPerson.name = "Jane"; // Error: Cannot set property name of #<GetPerson> which has only a getter

// setters

class SetPerson {
    #name
    #age
    #alias
    constructor(name, age, alias) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
    }
    get name(){
        return this.#name;
    }
    set name(newName){
        this.#name = newName;
    }
}

let setPerson = new SetPerson("John", 30,"Johnny");
console.log(setPerson.name);
setPerson.name = "Jane";
console.log(setPerson.name); // Jane

// Herencia

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    constructor(name,size) {
        super(name); // Llama al constructor de la clase padre
        this.size = size;
    }
    speak() {
        return `${this.name} barks.`;
    }
}
let dog = new Dog("Rex","Large");
console.log(dog.speak()); // Rex barks.

// Metodos estáticos

class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

console.log(MathUtil.add(5, 3)); // 8




// Clases avanzadas



class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Ariel",32)
person.greet()

person.getAge = function () {
    console.log(`Tengo ${this.age} años`)
}

person.getAge()



// - Abstracción

//Clases abstractas

class Animal {
    constructor(name) {
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método debe ser implementado por la subclase")
    }
}


// Poliformismo

class Cat extends Animal {
    makeSound() {
        console.log("Miau")
    }
}


class Dog extends Animal {
    makeSound() {
        console.log("Guau")
    }
}

const cat = new Cat("aricat")

const dog = new Dog("aridog")

cat.makeSound()
dog.makeSound()

// Mixins

const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}


class Bird extends Animal {

}

class Dragon extends Animal {

}

Object.assign(Bird.prototype,FlyMixin)

const bird = new Bird("AriBird")

console.log(bird.name)

bird.fly()

// Patrón Singleton

class Session {
    constructor(name) {
        if(Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session = new Session("Ari Perez")


//Symbol

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }
}

const user = new User("Ari")
console.log(user.name)

//insanceof

class Car {

}

const car = new Car()

console.log(car instanceof Car)

// Proxy

const proxy = {
    get(target,property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },

    set(target,property,value) {
        if (property === "balance" && value<0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const cuenta = new Proxy(new BankAccount(100),proxy)

cuenta.balance

cuenta.balance = 50
console.log(cuenta.balance)





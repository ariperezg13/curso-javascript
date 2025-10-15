// Crea una clase que tenga dos propiedades

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    
    static personasCreadas() {
        return "Funcion para crear personas"
    }
}

person1 = new Person("Ariel",32);
console.log(person1);
console.log(Person.personasCreadas());


// Crea un metodo que devuelva una cadena de texto con el nombre y la edad
class PersonConMetodo{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

person2 = new PersonConMetodo("Ariel",32);

console.log(person2.getInfo())



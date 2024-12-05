class Animal{
    #type
    #height

    constructor(name, height, age, type, weight){
        this.name = name;
        this.#height = height;
        this.age = age;
        this.#type = type;
        this.weight = weight;
    }

    thisAnimal(){
        console.log(`This animal is named ${this.name} and is ${this.age} years old`)
        console.log(`${this.name} is a ${this.#type}.`)
        console.log(`${this.name} is ${this.#height} cm tall, and weighs ${this.weight} kg.`)
    }

    getHeight(){
        return this.#height
    }
    setHeight(newHeight){
        this.#height = newHeight;
    }
}

const Julius = new Animal("Julius", 150, 40, "Chimpanzee", 40);
Julius.setHeight(140); 

console.log(Julius.thisAnimal());

class Vehicles{
    #name;
    #type;
    #model;
    #registration

    constructor(name, type, model, registration){
        this.#name = name;
        this.#type = type;
        this.#model = model;
        this.#registration = registration;
    }

    print(){
    return `${this.#name}, ${this.#type}, ${this.#model}, ${this.#registration}`
    }

    getName(){
        return this.#name;
    }
    getType(){
        return this.#type;
    }
    getRegistration(){
        return this.#registration;
    }
    getModel(){
        return this.#model
    }

    setName(name){
        this.#name = name; 
    }
    setType(type){
        this.#type = type;
    }
    setRegistration(registration){
        this.#registration = registration;
    }
    setModel(model){
        this.#model = model;
    }
}

class Car extends Vehicles{
    #doors;
    #engine;

    constructor(name, type, model, registration, doors, engine){
        super(name, type, model, registration);
        this.#doors = doors;
        this.#engine = engine;
    }

    print(){
        let t= super.print();
        return t + `, ${this.#doors}, ${this.#engine}`
    }
    getDoors(){
        return this.#doors;
    }
    getEngine(){
        return this.#engine;
    }
    setDoors(doors){
        this.#doors = doors;
    }
    setEngine(engine){
        this.#engine = engine;
    }
}

class Bike extends Vehicles{
    #wheels
    #seats;

    constructor(name, type, model, registration, wheels, seats){
        super(name, type, model, registration);
        this.#wheels = wheels;
        this.#seats = seats; 
    }
    print(){
        let t = super.print();
        return t + `, ${this.#wheels}, ${this.#seats}`
    }

    getWheels(){
        return this.#wheels
    }
    getSeats(){
        return this.#seats
    }

    setWheels(wheels){
        this.#wheels = wheels;
    }
    setSeats(seats){
        this.#seats = seats;
    }
}
const vehicle = new Vehicles("Peugeot", "Car", "3008", "KJ 39233");
console.log(vehicle.print());

const car = new Car("Opel", "Box", "Combo C", "LS 75303", 3, "V4");
console.log(car.print());

const bike = new Bike("Harley-Davidson", "Touring bike", "Road King", "AA 4043", 2, 1);
console.log(bike.print());

const person ={
    firstName: "Ruben",
    lastName: "Tuft",
    adress: {
        street: "Nerlivegen",
        houseNumber: 14,
        postNumber: 6063,
        postAdress: "Hjørungavåg",

        info: function(){
            return this.street + " " + this.houseNumber + ", " + this.postNumber + " " + this.postAdress;
        }
    },
    info: function(){
        return this.firstName + " " + this.lastName + ", " + this.adress.info();
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.adress.street);
console.log(person.adress.info());
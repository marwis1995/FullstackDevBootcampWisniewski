const Person = function(name, surname, age){
    this.name = name
    this.surname = surname
    this.age = age
} 



const person = new Person("Jan", "Kowalski", 18)
const person2 = new Person("Jan", "Nowak", 20)
console.log(person.name + " " + person.surname + " " + person.age)
console.log(person2)

let persons = [person, person2, new Person("Jan", "Kowalski", 18), new Person("Jan", "Kowalski", 18)]
console.log(persons)
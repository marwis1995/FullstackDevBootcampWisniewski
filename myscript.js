//Numeric
let length = 180
console.log(length)
let weight = 85.5
console.log(weight)


//String
let color = "Yellow"
console.log(color)


//Boolean
let x = true
console.log(x)
let y = false
console.log(y)


//Object
let person = {firstName:"Marek", lastName:"Wisniewski"}
console.log(person)


//Array
let cars = ["Saab", "Volvo", "BMW"]
console.log(cars)


//Date
const date = new Date("2024-08-31")
console.log(date)


//OPERATORS


//Equal
console.log("Wynik porównania: " + (length == weight))

//Equal value and equal type
let length2 = "180"
console.log(length === length2)

//Not equal
console.log(100 != 150)

//Not eq value and type
console.log(100 !== "100")

//Greater
console.log(100 > 99)

//Less
console.log(99 < 100)

//Grater or eq
console.log(100 >= 100)

//Less or eq
console.log(100 <= 100)

//Ternary operator
let result = 100 > 101 ? "TAK" : "NIE"
console.log(result)



//LOOPS

//For loop
for(let i = 0; i < 9; i++){
    console.log(i)
}

for(let i = 10; i >= 0; i--){
    console.log(i)
}

//ForEach
cars.forEach(function(element){
    console.log(element)
})




//IF ELSE (+ AND)
let themperature = 38.5
if(themperature >= 36 && themperature < 37){
    console.log("W normie")
}else if(themperature >= 37 && themperature < 38){
    console.log("Stan podgorączkowy")
}else if(themperature >= 38 && themperature < 40){
    console.log("Gorączka")
}else{
    console.log("Błąd pomiaru")
}


//OR
let money = 30
let voucher = false

if(money > 20 || voucher == true){
    console.log("Możesz iść na film")
}

//NOT
if(!(15>20)){
    console.log("NOT")
}

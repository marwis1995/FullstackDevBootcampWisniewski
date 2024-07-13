function exampleFunction(){
    console.log("Function")
}

function substractArgs(arg1, arg2){
    let result = arg1 + arg2
    console.log(result)
}

function calculateAge(yearOfBirth){
    return 2024 -  yearOfBirth
}

function checkIdCanWatchMovie(age, money){
    if(age >= 18 && money >= 30){
        return true
    }else{
        return false
    }
    console.log("Unreachable code detected")
}

window.onload = function (){
    exampleFunction()
    substractArgs(2, 2)
    substractArgs(2, 3)

    let myAge = calculateAge(1995)
    console.log("Mój wiek to: " + myAge)
    let myMoney = 50

    console.log(checkIdCanWatchMovie(myAge, myMoney))
}
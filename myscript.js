class AppConfig{
    constructor(number = 5, urlToServer = "prod_server"){
        if(AppConfig.exists){
            return AppConfig.instance
        }
        this.randomNumber = Math.random()
        this.number = number
        this.urlToServer = urlToServer
        AppConfig.exists = true
        AppConfig.instance = this
        return this
    }
}


const configObject = new AppConfig(8, localhost)
const configObject2 = new AppConfig(1)
const configObject3 = new AppConfig(1)

console.log(configObject)
console.log(configObject2)
console.log(configObject3)
console.log(configObject === configObject2)
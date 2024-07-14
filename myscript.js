const Player = function(nick, email){
    this.nick = nick
    this.email = email
    this.shoot = () => console.log("SHOOT!!!")
} 


Player.prototype.login = () => console.log("Logged!")
Player.prototype.logout = () => console.log("Logout!")
Player.prototype.moveLeft = () => console.log("Go left!")
Player.prototype.moveRight = () => console.log("Go right!")

console.log(Player)

const player1 = new Player("Nick1", "example1@example.pl")
const player2 = new Player("Nick2", "example2@example.pl")
const player3 = new Player("Nick3", "example3@example.pl")

console.log(player1)
console.log(player2)
console.log(player3)

player1.shoot()
player1.login()


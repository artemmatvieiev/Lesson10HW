function Player() {
	this.cards = []
}
Player.prototype.addCard = function () {
    this.cards.push(Math.ceil(Math.random()*11))
}
const diler = new Player()
const player = new Player()

add.addEventListener("click", giveCard)
pas.addEventListener("click", result)
newGame.addEventListener("click", function () {
	location.reload()
})
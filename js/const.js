const idDilerCards = document.getElementById("dilerCards")
const idDilerPoints = document.getElementById("dilerPoints")
const idPlayerCards = document.getElementById("playerCards")
const idPlayerPoints = document.getElementById("playerPoints")
const add = document.getElementById("addCard")
const pas = document.getElementById("pas")
const resultGame = document.getElementById("result")
const newGame = document.getElementById("newGame")
let sumDiler = 0
let sumPlayer = 0
const giveCard = function () {
	if(sumDiler < 18) diler.addCard()
	
	player.addCard()
	
	sumDiler = diler.cards.reduce(function(acc, current) {
		return acc + current
	},0)
	sumPlayer = player.cards.reduce(function(acc, current) {
		return acc + current
	},0)
	idPlayerCards.innerText = player.cards.join(" ")
	idPlayerPoints.innerText = sumPlayer
}

const result = function () {
	while(sumDiler < 18) {
		diler.addCard()
		sumDiler = diler.cards.reduce(function(acc, current) {
			return acc + current
		},0)
		idDilerCards.innerText = diler.cards.join(" ")
		idDilerPoints.innerText = sumDiler
	}
	diler.cards.push(1)
	idDilerCards.innerText = diler.cards.join(" ")
	idDilerPoints.innerText = sumDiler
	if(
			((sumPlayer <= 21)&&(sumDiler > 21))
			||
			((sumPlayer <= 21)&&(sumDiler <= 21)&&(sumPlayer > sumDiler))
		) {
				resultGame.innerText = "Поздравляем! Вы выиграли!!!"
	}
	else {
		resultGame.innerText = "Вы проиграли!"
	}	
}
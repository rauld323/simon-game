const buttonColors = ["red","blue","green","yellow"];

let gamePattern = [];

function nextSequence(){
		let randomNumber = Math.floor(Math.random() * 4)
		let randomChosenColor = buttonColors[randomNumber]
		gamePattern.push(randomChosenColor)

	$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

	$("sounds" + randomChosenColor + '.mp3')[0].play()
}
nextSequence()





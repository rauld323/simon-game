const buttonColors = ["red","blue","green","yellow"];

let gamePattern = [];
let userClickedPattern = []


function nextSequence(){
		let randomNumber = Math.floor(Math.random() * 4)
		let randomChosenColor = buttonColors[randomNumber]
		gamePattern.push(randomChosenColor)

	$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

	playSound(randomChosenColor)

 }

$('.btn').click(function () {
	let userChosenColour = $(this).attr('id');
	userClickedPattern.push(userChosenColour);

	$("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

	playSound(userChosenColour)
});


function playSound(name){

		let playAudio = new Audio("sounds/" + name + '.mp3')
		playAudio.play()
	}

function animatePress(currentColour){

		$("#" + currentColour).addClass("pressed");
		setTimeout(function () {
			$('.btn').removeClass('pressed');
		}, 100)
}




$(document).ready(function() {

var winArray = ["A", "E", "C", "H", "N", "P", "R", "T"];
var correctGuessArray = [];
var wrongGuessArray = [];
var audio = new Audio('./Chance The Rapper - All Night (Coloring Book).mp3');

$(".redrocks").hide();

// replaces the "_" with the letter clicked
	function correctGuess(letter) {
		$("."+letter).each(function() {
			// $(this).html(letter);
			$(this).replaceWith('<span>' + letter + '</span>');
			$(this).removeClass('correctguess').addClass("correctguess-active animated fadeInUp");
			// console.log(this);
		});
	}

// pushes guessed letters into correct and incorrect arrays
	function pushLetters(letter) {
		for (var i = 0; i < winArray.length; i++) {
			if  (winArray[i] === letter) {
				correctGuessArray.push(letter);
			}
			// else {
			// 	wrongGuessArray.push(letter);
			// }
			// console.log("correct" + correctGuessArray);
			// console.log("wrong" + wrongGuessArray);
		}
	}

// plays song and shows Red Rocks div if won, enables pause with space bar
	function checkWin() {
		if(correctGuessArray.length === 8) {
			audio.play();
			$(".redrocks").show();
			$('.balloon').show();
			$(".placeholder").hide();
		}
		$(document).keydown(function(e) {
          if (e.keyCode == '32') {
            audio.pause();
          }
        });
	}

// works
	$('.alphaCorrect').one("click",function() {
		$(this).removeClass('unclicked').addClass('clicked animated bounce');
		correctGuess(this.id);
		pushLetters(this.id);
		checkWin();	
	});

	$('.alphaWrong').one("click",function() {
		$(this).removeClass('unclicked').addClass('clicked animated shake');
		correctGuess(this.id);
		pushLetters(this.id);
		checkWin();	
	});


// in progress
	// $('.alpha').one("click",function() {
	// 	console.log(this.id);
	// 	if (this.id === ("A" || "E" || "C" || "H" || "N" || "P" || "R" || "T") ) {
	// 		console.log(this.id === "A");

	// 		$(this).removeClass('unclicked').addClass('clicked animated bounce');
	// 		correctGuessArray.push(this.id);
	// 		console.log("correct " + correctGuessArray);

	// 	}
	// 	else {
	// 		$(this).removeClass('unclicked').addClass('clicked animated shake');
	// 		// wrongGuessArray.push(this.id);
	// 		// console.log("wrong " + wrongGuessArray);
	// 	}
	// 	correctGuess(this.id);
	// 	// pushLetters(this.id);
	// 	checkWin();
	// 	// console.log(this.id);		
	// });
// });
});
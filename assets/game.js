$(document).ready(function(){
//variables
var wins = 0;
var losses = 0;
var minPrice = 19;
var maxPrice = 120;
var price = priceFromRange (minPrice, maxPrice);
//crystal variants
var rupee = {
	green:	
	{name: "Green",
	value: 0
	},
	red:
	{name: "Red",
	value: 0
	},
	blue:
	{name: "Blue",
	value: 0
	},
	purple:
	{name: "Purple",
	value: 0
	}}
	 
var amountPaid = 0;
var points;


function priceFromRange(min, max){
			return Math.floor(Math.random()*(max-min)+min);
		}

function startGame(){

	//function for random price

	rupee.green.points = Math.floor(Math.random() * 12) + 1;
				
	rupee.red.points= Math.floor(Math.random() * 12) + 1;
		
	rupee.blue.points= Math.floor(Math.random() * 12) + 1;
				
	rupee.purple.points=Math.floor(Math.random() * 12) + 1;	
//start game
	console.log("green:" + rupee.green.points+ "|red: " +rupee.red.points)
		amountPaid = 0;
		price = priceFromRange (minPrice, maxPrice);
		$("#price").text(price);
		$("#total").text(amountPaid);
	console.log(price);
	console.log(amountPaid);
	}

	function amountPaid(clickedRupee){
		amountPaid += clickedRupee.points;
		$("#total").html(amountPaid);
	}

	var winLose = function(){
		if (amountPaid == price){
			console.log("Winner.");
			wins++;
			$("#wins").html(wins);
			startGame();
		}

		else if (amountPaid > price){
			console.log(loser);
			losses++;
			$("#losses").html(losses);
			startGame();
		}
	}



startGame();
	$("#green").click(function(){
		amountPaid(rupee.green)
	});
	$("#red").click(function(){
		amountPaid(rupee.red)
	});
	$("#blue").click(function(){
		amountPaid(rupee.blue)
	});
	$("#purple").click(function(){
		amountPaid(rupee.purple)
	});
})









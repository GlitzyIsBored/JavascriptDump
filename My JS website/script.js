// Calculator

function eventCalculator() {
var first = prompt("Enter First Num");
var second =  prompt("Enter Second Num");
var sum = Number(first) + Number(second);
console.log("ans " + sum);
};

//form validation practise

function write_name() {
	var welcome_parra = document.getElementById("welcome");
	var name = document.getElementById("name");
	
	alert("hi " + name.value);
	}


// Change background

        document.querySelector("h1"); {
            onclick = function() { 
                document.querySelector(".segmentTwo").style.background = "#a79cb5" ;
                document.querySelector("h4").style.color = "white";
            }
        }


// addEventListener
const eventListener = document.querySelector(".eventListener")

eventListener.addEventListener("click", e=> {
	
// Random fortune teller: userInput
	prompt("State your query");

// Random fortune teller: Functions
	var randomNumber = Math.floor(Math.random() * 6);

	var fortuneTeller = "";

	switch (randomNumber) {
		case 0:
			fortuneTeller = ("No. (Undoubtely)");
		break;
		case 1:
			fortuneTeller = ("Yes. (Undoubtely)");
		break;
		case 2: 
			fortuneTeller = ("What a pathetic question.");
		break;
		case 3:
			fortuneTeller = ("The universe decided to be nice with you; all your desires are granted.");
		break;
		case 4:
			fortuneTeller = ("Kill yourself");
		break;
		case 5:
			fortuneTeller = ("Perchance");
		break;
		case 6:
			fortuneTeller = ("Definitely");
		
	}

	alert(fortuneTeller);
})


//key press

    function press(e) {
        if (e.keyCode === 81) {
            alert("letter q");
        }
    };

    document.onkeydown = press;

//Object Array
 const character = "Cloud";
 const description = character + "place of residency is Nibelheim";
 
 //querySelectorAll
 
 let elements = document.querySelectorAll(".headerOne, .headerTwo"); 
	 for (let i = 0; i < elements.length; i++) {
		 elements[i].addEventListener("click", function() {
			 elements[i].style.backgroundColor = "#a79cb5";
			 elements[i].style.color = "#e4d8e8";
	 }) 
 }

 
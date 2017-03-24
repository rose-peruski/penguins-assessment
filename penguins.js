//NEXT VERSION
//rework to add more penguins






var sget = require("sget");

var penguinArray = [];
penguinPoints = 0;



var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"            Penguins         " +
								"\n**********************************************************************\n",
					play: "1. To play for PenguinPebbles, press 1 ",
					view:"2. To view PenguinPebbles, press 2  ",
					spend:	"3. To spend PenguinPebbles,  press 3",
					exit: "4. To exit, type 'exit' or press 4 "	

					};

var userMessages = {
					name: "\nEnter your Penguin's name: ",
					species: "\nEnter your Penguin's species: Emperor, Gentoo, or Rockhopper ",
					gender: "\nEnter Penguin gender 'male'or 'female' - sorry, new genders will be introduced as become available):",
					invalid: "\nInvalid Entry",
					unable: "\nUnable to find Penguin",
					
					};					

var penguinPointOptions = {
					twirl: "1. *T*w*i*r*l",
					speak: "2. *singing* The Icebergs are alive, with the sound of fishies!!!!!!",
					dance: "3 .*dancing* dance, dance!"
}

var Penguin = function(name, species, gender) {
	this.name = name;
	this.species = species;
	this.gender = gender;
	

	
	};


addPoints = function(points) {
		penguinPoints += points;
		console.log("Your Penguin has " + penguinPoints + " PenguinPoints to spend");
	};

losePoints	= function(points) {
		penguinPoints -=points;
		console.log("Your Penguin has " + penguinPoints + " PenguinPoints to spend");
	}

var wipeScreen = function () {
  return process.stdout.write('\033c');
};
// var returnToRemove= function() {
// 	var info = sget(userMessages.remove).trim;
		
// 		if(info == 1) {
//       		removeAnimal();
//         } else if (info == 2) {
//             mainMenu();
// 		} 
// };

// // 



var exitProgram= function() {
	console.log("Thanks " + userName + " for playing");
	process.exit();
};


var printPenguinOptions = function() {
    for (var key in penguinPointOptions) {
      console.log(penguinPointOptions[key]);
    }
};



var spendPoints = function() {
	if (penguinPoints<20) {
		console.log("Sorry, " + userName +" you need at least 20 points to do tricks!");
		returnToMain();
	} else {
		console.log("\n Hi " + userName + "Time to play with, " +penguinArray[0].name);
		printPenguinOptions();
		choice= sget("Enter your selection: ").trim();

			if (choice == 1 ) {
				console.log("You made " +penguinArray[0].name + " twirl around!");
				losePoints(5);
				returnToMain();
			} else if (choice == 2) {
				console.log("You made " +penguinArray[0].name + " sing!");
				losePoints(10);
				returnToMain();
			} else if (choice == 3) {
				console.log("You made " +penguinArray[0].name + " dance!");
				losePoints(15);
				returnToMain();
			} else if (choice ==4){
				mainMenu();
			} else {
				console.log ("Invalid choice, try again.\n");
				spendPoints();
			}


		}
	

};


var viewPenguinPoints = function() {
	console.log("Let's see how many Penguin Points " + Penguin.name + " has " + userName );
		console.log(penguinArray[0].penguinPoints);
		returnToMain();
};

var playGame = function() {
	var num1 = Math.floor((Math.random() * 10));
	var num2 = 	Math.floor((Math.random() * 10));

	console.log("To earn Penguin Points for " + Penguin.name + ", " + userName + " must answer a math question");
	var answer = sget(" What is " + num1 + " + "+ num2 + "?").trim();	

	if (answer == (num1+num2)) {
		console.log("Correct!");
		addPoints(5);
	} else {
		console.log("Sorry, that is incorrect, try again!");
		losePoints(5);
	}
	returnToMain();
};


	
var printMenu = function() {
    for (var key in mainMenuMessages) {
      console.log(mainMenuMessages[key]);
    }
};

var mainMenu = function() {
	//present user with options 
	wipeScreen();
	printMenu();
	var userSelection = sget("Make your selection:").trim();
		
		if(userSelection==1 ) {
			playGame();
		} else if (userSelection==2) {
			viewPenguinPoints();
		} else if ( userSelection==3) {
			spendPoints();
		}  else if (userSelection=='exit' || userSelection==4) {
			exitProgram();
		} 
		else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};



var returnToMain = function () {
	var returnToMain = sget("\nPress any key to return to main menu when ready.").trim();
	mainMenu();
};

var addPenguin = function() {
	
		var penguinName = sget("\n Ok, " + userName + userMessages.name).trim();
			penguinName=penguinName.toLowerCase();
		

		var penguinSpecies = sget(userMessages.species).trim();
			penguinSpecies=penguinSpecies.toLowerCase();
			if (penguinSpecies == "emperor" || penguinSpecies == 'gentoo' || penguinSpecies == "rockhopper") {
				
			} else {
				console.log(userMessages.invalid);
				addPenguin();
			}


		var penguinGender = sget(userMessages.gender).trim();
			penguinGender=penguinGender.toLowerCase();
			if (penguinGender =='male' || penguinGender=='female') {
				
			} else {
				console.log(userMessages.invalid);
				addPenguin();
			}
	
		var newPenguin = new Penguin (penguinName, penguinSpecies, penguinGender);
		penguinArray.push(newPenguin);

	
		
		returnToMain();
	} ;



var runProgram=function() {
	console.log(mainMenuMessages.welcome);

	var name = sget("Please enter your Name: ").trim();
	userName = name;
	

	console.log("Welcome " + userName +"!\n");

	console.log("Let's start by adding your first Penguin!");
	
	addPenguin();

}();



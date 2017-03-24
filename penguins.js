//NEXT VERSION
//rework to add more penguins






var sget = require("sget");

var penguinArray = [];




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
					twirl: "*T*w*i*r*l",
					speak: "The Icebergs are alive, with the sound of fishies!!!!!!",
					dance: "dance, dance!"
}
var Penguin = function(name, species, gender) {
	this.name = name;
	this.species = species;
	this.gender = gender;
	this.penguinPoints = 0;

	this.addPoints = function(points) {
		this.points = points;
		this.penguinPoints = this.points + this.penguinPoints;
		console.log("Your Penguin has " + this.penguinPoints + " PenguinPoints to spend");
	}

	this.losePoints	= function(points) {
		this.points = points;
		this.penguinPoints = this.points - this.penguinPoints;
		console.log("Your Penguin has " + this.penguinPoints + " PenguinPoints to spend");
	};
}; 




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





var spendPoints = function() {
	console.log("\nTime to work with your animals, " + userName);
	printMenuFeed();
	choice= sget("Enter your selection: ").trim();

		if (choice == 1 ) {
			feedAnimal();
		} else if (choice == 2) {
			trainAnimal();
		} else if (choice == 3) {
			viewAnimalPoints();
		} else if (choice ==4){
			mainMenu();
		} else {
			console.log ("Invalid choice, try again.\n");
			zooKeep();
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
		penguinArray[0].addPoints(5);
	} else {
		console.log("Sorry, that is incorrect, try again!");
		penguinArray[0].losePoints(5);
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
		} else if (userSelection == 8){
			pointTest();
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



// var pointCounter=function(){
// 	if (penguinPoints==1) {
// 		console.log("You have 1 point.");
// 	} else{
// 	console.log("You have " + penguinPoints + " points.");}

// 	returnToMain();

// };

//helper functions




// var pointTest = function() {
// 	console.log("This shows how many points our animals have");
// 	var test1 = console.log("animal one points is 0");
// 				console.log(zooArray[1].penguinPoints==0);
// 	var test2 = console.log("new animal points (animal 3) is 0");
// 				console.log(zooArray[2].penguinPoints==0);			
// }}



var runProgram=function() {
	console.log(mainMenuMessages.welcome);

	var name = sget("Please enter your Name: ").trim();
	userName = name;
	

	console.log("Welcome " + userName +"!\n");

	console.log("Let's start by adding your first Penguin!");
	
	addPenguin();

}();



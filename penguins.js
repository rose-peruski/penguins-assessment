//BEFORE TURNING IN

//check to see if the remove option works in the add function






var sget = require("sget");

var penguinArray = [];
//var userName;
var checkGender;
var checkSpecies;
var animalNum;


var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"            Penguins         " +
								"\n**********************************************************************\n",
					play: "1. To play for PenguinPebbles, press 1 ",
					remove:"2. To view PenguinPebbles, press 2  ",
					spend:	"3. To spend PenguinPebbles,  press 3",
					add: "4. To view all the animals, type 'view' or press 4",
					remove: "5. To add a Penguin,  press 5",
					search: "6 To search for a Penguin, press 6",
					exit: "6. To exit, type 'exit' or press 7 "	

					};

var userMessages = {
					name: "\nEnter your Penguin's name: ",
					species: "\nEnter your Penguin's species: ",
					gender: "\nEnter Penguin gender 'male'or 'female' - sorry, new genders will be introduced as become available):",
					invalid: "\nInvalid Entry",
					unable: "\nUnable to find Penguin",
					
					};					

var Penguin = function(name, species, gender) {
	this.name = name;
	this.species = species;
	this.gender = gender;
	this.penguinPoints = 0;

	this.changePoints = function(points) {
		this.points = points;
		this.penguinPoints = this.points + this.penguinPoints;
		console.log("Your Penguin has " + this.penguinPoints + " PenguinPoints to spend");
	};
}; 
var checkGenderSpecies = function() {

	for (var i=0; i<zooArray.length; i++){
		var genderAnimal=checkGender.indexOf(zooArray[i].gender);
		var speciesAnimal=checkSpecies.indexOf(zooArray[i].species);
		
		if (genderAnimal==0 && speciesAnimal==0) {
			console.log("You already have an animal of this gender and species named " + zooArray[i].name);	
			returnToMain();
			
		} 

		
		} 

};

var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

var wipeScreen = function () {
  return process.stdout.write('\033c');
};
var returnToRemove= function() {
	var info = sget(userMessages.remove).trim;
		
		if(info == 1) {
      		removeAnimal();
        } else if (info == 2) {
            mainMenu();
		} 
};

var removeAnimal = function() {
	console.log("Sad to lose a friend, " + userName +", but sometimes, love just ain't enough");
	viewAnimalNames();
	removal = sget(userMessages.name).trim();
	
	for (var i = 0; i < zooArray.length; i++) {
		if ((zooArray[i].name == removal)) {
			zooArray.splice(i, 1);
			viewAnimalNames();
			break;
		}

		if (i == zooArray.length-1) {
			console.log(userMessages.unable);
		}
	}
	returnToMain();
};

var searchAnimal = function() {
	console.log("What kind of animal would you like to find " + userName +"?");
	answer1 =sget(userMessages.gender).trim(); 
	answer2=sget(userMessages.species).trim();
	answer1=answer1.toLowerCase();
	answer2=answer2.toLowerCase();
	
	for (var i=0; i<zooArray.length; i++){
		var genderAnimal=answer1.indexOf(zooArray[i].gender);
		var speciesAnimal=answer2.indexOf(zooArray[i].species);
		
		if (genderAnimal==0 && speciesAnimal==0) {
			console.log(answer1 + " " + answer2 + " named " + zooArray[i].name + " found!");
			
			break;
		}
		if (i == zooArray.length-1) {
			console.log(userMessages.unable);
		} 

	}
	returnToMain();
	

};

var viewanimal = function() { 
	console.log("\nLet's look at all the animals in " + zooName);
	console.log ("Name Gender Species");
	console.log("_____________________");
	zooArray.sort(function(a,b) {
		var nameA=a.name;
		var nameB=b.name;
    if (nameA < nameB) //sort string ascending
        return -1; 
    if (nameA > nameB)
        return 1;
    	return 0 //default return value (no sorting)
	});

	zooArray.forEach(function(object) { 
		console.log(object.name + " " + object.gender + " " + object.species);
	//console.log(zooArray);
	
	});
		returnToMain();
};


var exitProgram= function() {
	console.log("Thanks " + userName + " for playing We Bought a Zoo!");
	process.exit();
};


//zookeeper functions
var printMenuFeed = function() {
	console.log("\n");
	console.log("1. To feed an animal, enter 1");
	console.log("2. To train an animal, enter 2");
	console.log("3. To view animal healthPoint totals, enter 3");
	console.log("4. To return to the main menu, enter 4");
};


var returnToZoo = function() {
	var returnToZoo = sget("\nPress any key to return to play menu when ready.").trim();
	zooKeep();
};
var zooKeep = function() {
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

var viewAnimalNames = function() {
	console.log("\nList of animals in " + zooName);
	zooArray.forEach(function(object) { 
		console.log(object.name);
		});
};

var viewAnimalPoints = function() {
	console.log("\nAnimals  and their healthPoint totals in " + zooName);
	zooArray.forEach(function(object) { 
		console.log(object.name + " " + object.penguinPoints);
		});
	returnToZoo();
};

var feedAnimal = function(){
	viewAnimalNames();
	answer1 =sget(userMessages.name).trim(); 
	
	answer1=answer1.toLowerCase();
	
	
	for (var i=0; i<zooArray.length; i++){
		var searchAnimal=answer1.indexOf(zooArray[i].name);
		
		
		if (searchAnimal>-1) {
			console.log(zooArray[i].name);
			animalNum = i;
			console.log ("You just gave your animal a treat!\n");
			zooArray[animalNum].changePoints(10);
			break;
		}
		if (i == zooArray.length-1) {
			console.log(userMessages.unable);
		} 

	}

	
	returnToZoo();

};


var trainAnimal = function() {
	viewAnimalNames();
	
	answer1 =sget(userMessages.name).trim(); 
	
	answer1=answer1.toLowerCase();
	
	
	for (var i=0; i<zooArray.length; i++){
		var searchAnimal=answer1.indexOf(zooArray[i].name);
		
		
		if (searchAnimal>-1) {
			console.log(zooArray[i].name);
			animalNum = i;
			console.log("You just trained your animal!");
			zooArray[animalNum].changePoints(5);
			break;
		}
		if (i == zooArray.length-1) {
			console.log(userMessages.unable);
		} 

	}

	
	returnToZoo();
};

var mainMenu = function() {
	//present user with options 
	wipeScreen();
	printMenu();
	var userSelection = sget("Make your selection:").trim();
		userSelection=userSelection.toLowerCase();
		if(userSelection=='add' || userSelection==1 ) {
			addAnimal();
		} else if (userSelection=='remove' || userSelection==2) {
			removeAnimal();
		} else if (userSelection=='search' || userSelection==3) {
			searchAnimal();
		} else if (userSelection=='view' || userSelection==4) {
			viewanimal();	
		} else if (userSelection=='play' || userSelection==5){
			zooKeep();
		}
		  else if (userSelection=='exit' || userSelection==6) {
			exitProgram();
		} else if (userSelection == 8){
			pointTest();
		} 
		else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};

var printMenu = function() {
    for (var key in mainMenuMessages) {
      console.log(mainMenuMessages[key]);
    }
};

var returnToMain = function () {
	var returnToMain = sget("\nPress any key to return to main menu when ready.").trim();
	mainMenu();
};

var addPenguin = function() {
	
		var penguinName = sget("\n Ok, " + userName + userMessages.name).trim();
		var penguinSpecies = sget(userMessages.species).trim();
		var penguinGender = sget(userMessages.gender).trim();
			if (penguinGender =='male' || penguinGender=='female') {
				
			} else {
				console.log(userMessages.invalid);
				addPenguin();
			}
	

		penguinName=penguinName.toLowerCase();
		penguinSpecies=penguinSpecies.toLowerCase();
		penguinGender=penguinGender.toLowerCase();
	

		var newPenguin = new Penguin (penguinName, penguinSpecies, penguinGender);
		penguinArray.push(newPenguin);

		//console.log(zooArray);
		//viewAnimalNames();
		
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
	var penguin1 = new Penguin ("lambert", "lion", "male");
	var penguin2 = new Penguin ("elsie", "cow", "female");
	penguinArray.push(penguin1);
	penguinArray.push(penguin2);
	console.log(mainMenuMessages.welcome);

	var name = sget("Please enter your Name: ").trim();
	userName = name;
	

	console.log("Welcome " + userName +"!\n");

	console.log("Let's start by adding your first Penguin!");
	
	addPenguin();

}();


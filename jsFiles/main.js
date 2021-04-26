/*************
 * SELECTORS *
 *************/

const initiativeButton = document.getElementById("addToInit");
const characterName = document.getElementById("characterName");
const characterType = document.getElementById("chartype");
const initiative = document.getElementById("initiative");

/**************************
 * OTHER GLOBAL VARIABLES *
 **************************/
let unOrderedInit = [];
let orderedInit = [];

/******************
 * EVENT LISTENER *
 ******************/

initiativeButton.addEventListener("click", addToInitiativeList);

/********************
 * HELPER FUNCTIONS *
 ********************/
function addToInitiativeList() {
	// console.log("Add Character to Initiative Tracker")
	// console.log("Character Name: ", characterName.value)
	// console.log("Character Type: ", characterType.value)
	// console.log("Initiative Roll: ", initiative.value)
	//create an object with the input values in initiative tracker fields
	let initiativeObj = {};
	initiativeObj.characterName = characterName.value;
	initiativeObj.characterType = characterType.value;
	initiativeObj.initiativeRoll = initiative.value;
	// console.log(initiativeObj)
	//push the obj into global variable
	unOrderedInit.push(initiativeObj);
	//console.log("Unordered Initiative: ", unOrderedInit)
	//use function to order the initiative
	orderInitiative(unOrderedInit);
}

function orderInitiative(obj) {
	//create temp arr
	newInitiative = [];

	//sort through by the initiative roll
	obj.sort((a, b) => {
		return parseInt(b.initiativeRoll - a.initiativeRoll);
	});
	//once sorted we want to place each into the new arr
	obj.forEach((e) => {
		newInitiative.push(e);
		//console.log(`${e.characterName} ${e.characterType} ${e.initiativeRoll}`)
	});
	//set the global arr to equal the new temp arr
	orderedInit = newInitiative;
	//console.log("Ordered Init: ", orderedInit)
}

/*************
 * SELECTORS *
 *************/

const initiativeButton = document.getElementById("addToInit");
const characterName = document.getElementById("characterName");
const characterType = document.getElementById("chartype");
const initiative = document.getElementById("initiative");
const initTable = document.getElementById("initTable");
const nextInitButton = document.getElementById("nextInit");
const resetInitButton = document.getElementById("resetInit");

/******************
 * EVENT LISTENER *
 ******************/

initiativeButton.addEventListener("click", addToInitiativeList);
nextInitButton.addEventListener("click", nextInit);
resetInitButton.addEventListener("click", resetInit);

/*************
 * FUNCTIONS *
 *************/

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

	// buildInitTable(orderedInit)
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
	console.log("Ordered Init: ", orderedInit);
}

function resetInit() {
	unOrderedInit = [];
	orderedInit = [];
	console.log("Ordered Init: ", orderedInit);
}

function buildInitTable(orderedInit) {
	// row = table.insertRow(0)
	// nameCell = row.insertCell(0)
	// charTypeCell = row.insertCell(1)
	// initRollCell = row.insertCell(2)
	for (char of orderedInit) {
		row = initTable.insertRow(0);
		nameCell = row.insertCell(0);
		charTypeCell = row.insertCell(1);
		initRollCell = row.insertCell(2);

		nameCell.innerHTML = `${char.characterName}`;
		charTypeCell.innerHTML = `${char.characterType}`;
		initRollCell.innerHTML = `${char.initiativeRoll}`;
	}
}

function nextInit() {
	console.log("clicked");
	console.log(
		"Current Init =: ",
		currentInit + 1,
		"Current Players Turn: ",
		orderedInit[currentInit].characterName
	);
	console.log();
	currentPlayer = orderedInit[currentInit].characterName;
	if (currentInit < orderedInit.length - 1) {
		currentInit++;
		console.log(currentInit + 1);
	} else {
		currentInit = 0;
	}
}

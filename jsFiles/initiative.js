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

document.getElementById(
	"currentInitPosition"
).innerText = `Current Init Pos: ${currentInit}`;
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
	//create an object with the input values in initiative tracker fields
	let initiativeObj = {};
	initiativeObj.characterName = characterName.value;
	initiativeObj.characterType = characterType.value;
	initiativeObj.initiativeRoll = initiative.value;
	//push the obj into global variable
	unOrderedInit.push(initiativeObj);
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
	console.log("Ordered Init: ", orderedInit);
}

function resetInit() {
	unOrderedInit = [];
	orderedInit = [];
	console.log("Ordered Init: ", orderedInit);
}
//doesnt work yet, not being called
function buildInitTable(orderedInit) {
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
	console.log(
		"Current local-Init = ",
		currentInit + 1,
		"Current Players Turn: ",
		orderedInit[currentInit].characterName
	);
	console.log(
		"Current storedInit = ",
		localStorage.currentInit + 1,
		"Current Players Turn: ",
		orderedInit[currentInit].characterName
	);
	
	//set screen to display init
	document.getElementById(
		"currentInitPosition"
	).innerText = `Current Init Pos: ${currentInit + 1}`;
	//set the current player to the name of the CurrentInitOBJ
	currentPlayer = orderedInit[currentInit].characterName;
	//then we want to increment the number for the current initiative position
	if (currentInit < orderedInit.length - 1) {
		currentInit++;
	} else {
		currentInit = 0;
	}
}

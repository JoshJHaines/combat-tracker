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

/******************
 * CLICK FUNCTION *
 ******************/

function addToInitiativeList() {
	//create an object with the input values in initiative tracker fields
	let initiativeObj = {
		characterName: characterName.value,
		characterType: characterType.value,
		initiativeRoll: Number(initiative.value),
	};
	//push the obj into global variable
	unOrderedInit.push(initiativeObj);
	//use function to order the initiative
	orderInitiative(unOrderedInit);
}

function nextInit() {
	if (currentInit < orderedInit.length - 1) {
		currentInit++;
		localStorage.setItem("currentInit", currentInit);
	} else {
		currentInit = 0;
		localStorage.setItem("currentInit", currentInit);
	}
	currentPlayer = orderedInit[currentInit].characterName;
	localStorage.setItem("currentPlayer", currentPlayer);
	displayInitiativeStr();
}

function resetInit() {
	unOrderedInit = [];
	orderedInit = [];
	currentPlayer = "None";
	console.log("Ordered Init: ", orderedInit);
	currentInit = -1;
	localStorage.setItem("currentInit", currentInit);
	localStorage.setItem("orderedInit", JSON.stringify(orderedInit));
	localStorage.setItem("currentPlayer", currentPlayer);
	displayInitiativeStr();
}
/*******************
 * HELPER FUNCTION *
 *******************/
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
	//store in local storage
	localStorage.setItem("orderedInit", JSON.stringify(orderedInit));

	console.log(
		"Stored Init List: ",
		JSON.parse(localStorage.getItem("orderedInit") || "[]")
	);
}

function displayInitiativeStr() {
	document.getElementById(
		"currentInitPosition"
	).innerText = `Current Init Pos: ${
		currentInit + 1
	}  Current Player: ${currentPlayer}`;
}

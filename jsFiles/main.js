/*************
 * SELECTORS *
 *************/

/* DAMAGE TRACKER */
const addDamageButton = document.getElementById("addToDmg");
const atkTypeSelect = document.getElementById("atkType");
const dmg1TypeSelect = document.getElementById("dmg1Type");
const dmg2TypeSelect = document.getElementById("dmg2Type");


/******************
 * EVENT LISTENER *
 ******************/
addDamageButton.addEventListener("click", addToDamageList);

/********************
 * HELPER FUNCTIONS *
 ********************/
function addToDamageList() {
	// console.log("Add to Damage Tracker")
	// console.log("Attack Successful: ", atkSuccess.value)
	// console.log("Attack Type: ", atkType.value)
	// console.log("Damage Inflicted: ", dmgInflicted.value)
	// console.log("Damage Type: ", dmgType.value)
	// console.log("Was Kill: ", killSuccess.value)

	let dmgObj = {};
	if (atkSuccess.value === "no") {
		dmgObj.characterName = currentPlayer
		dmgObj.atkSuccess = atkSuccess.value;
		dmgObj.atkType = "none";
		dmgObj.dmg1Inflicted = 0;
		dmgObj.dmg1Type = "none";
		dmgObj.dmg2Inflicted = 0;
		dmgObj.dmg2Type = "none";
		dmgObj.killSuccess = "no";
	} else {
		dmgObj.characterName = currentPlayer
		dmgObj.atkSuccess = atkSuccess.value;
		dmgObj.atkType = atkType.value;
		dmgObj.dmg1Inflicted = dmg1Inflicted.value;
		dmgObj.dmg1Type = dmg1Type.value;
		dmgObj.dmg2Inflicted = dmg2Inflicted.value;
		dmgObj.dmg2Type = dmg2Type.value;
		dmgObj.killSuccess = killSuccess.value;
	}
	console.log(dmgObj);
	//push the obj into global variable
	dmgList.push(dmgObj);
	console.log("full dmg lst:", dmgList);
}

function createDropDown(dataSet, listenter) {
	for (index of dataSet) {
		let option = document.createElement("option");
		option.text = `${index.type}`;
		listenter.add(option);
	}
}

/***********
 * ON LOAD *
 ***********/
createDropDown(CHARACTERTYPES, characterType);
createDropDown(ATTACKTYPES, atkTypeSelect);
createDropDown(DAMAGETYPES, dmg1TypeSelect);
createDropDown(DAMAGETYPES, dmg2TypeSelect);

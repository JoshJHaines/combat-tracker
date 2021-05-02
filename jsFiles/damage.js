/*************
 * SELECTORS *
 *************/
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
	let dmgObj = {};
	if (atkSuccess.value === "no") {
		dmgObj = {
			characterName: currentPlayer,
			atkSuccess: atkSuccess.value,
			atkType: "none",
			dmg1Inflicted: 0,
			dmg1Type: "none",
			dmg2Inflicted: 0,
			dmg2Type: "none",
			killSuccess: "no",
		}	
	} else {
		if (dmg2Inflicted.value === ""){
			dmgObj = {
				characterName: currentPlayer,
				atkSuccess: atkSuccess.value,
				atkType: atkType.value,
				dmg1Inflicted: Number(dmg1Inflicted.value),
				dmg1Type: dmg1Type.value,
				dmg2Inflicted: 0,
				dmg2Type: dmg2Type.value,
				killSuccess: killSuccess.value,
			}
		} else {
			dmgObj = {
				characterName: currentPlayer,
				atkSuccess: atkSuccess.value,
				atkType: atkType.value,
				dmg1Inflicted: Number(dmg1Inflicted.value),
				dmg1Type: dmg1Type.value,
				dmg2Inflicted: Number(dmg2Inflicted.value),
				dmg2Type: dmg2Type.value,
				killSuccess: killSuccess.value,
			}
		}
	}
	updatePlayerScoreData(dmgObj)
	dmgList.push(dmgObj);
	console.log("full dmg lst:", dmgList);
	localStorage.setItem("dmgList", JSON.stringify(dmgList));
	window.location.reload()
}

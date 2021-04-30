const resetAllButton = document.getElementById("resetAll");

resetAllButton.addEventListener("click", resetALLdata);

const APItoken = `rNcvKrCyAO_7NPzYh9ev56Q0UXSGul2ttWFRtMVfoOc`;
const dogShitButton = document.getElementById("dogShit");
const plantAPI = `https://trefle.io/api/v1/plants?${APItoken}`;

const DnDapi = `https://www.dnd5eapi.co/api/races/`;
const DnDmonstersAPI = `https://www.dnd5eapi.co/api/monsters/`;
const DnDweaponAPI = "https://api.open5e.com/weapons/";

dogShitButton.addEventListener("click", murlpe);

function murlpe() {
	fetch(DnDapi)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data.results)
			// console.log(data.results[0].index)
			for (i = 0; i < data.results.length; i++) {
				raceOBJ = {
					index: data.results[i].index,
					name: data.results[i].name,
				};
				RACES.push(raceOBJ);
			}
		});
	console.log("races   ", RACES);
}

function DnDmonsters() {
	fetch(DnDmonstersAPI)
		.then((response) => response.json())
		.then((data) => {
			//console.log(data.results)
			// console.log(data.results[0].index)
			for (i = 0; i < data.results.length-1; i++) {
				fetch(DnDmonstersAPI + data.results[i].index)
					.then((response) => response.json())
					.then((data) => {
						//console.log(data);
						monsterOBJ = {
							index: data.index,
							name: data.name,
							armor_class: data.armor_class,
							hit_points: data.hit_points,
						};
						MONSTERS.push(monsterOBJ);
					});
			}
		});
	console.log("monsters   ", MONSTERS);
}

function DnDweapons() {
	fetch(DnDweaponAPI)
		.then((response) => response.json())
		.then((data) => {
			//console.log(data.results)
			// console.log(data.results[0].index)
			// for (i = 0; i < data.results.length; i++){
			// 	raceOBJ = {
			// 		index: data.results[i].index,
			// 		name: data.results[i].name
			// 	}
			// 	RACES.push(raceOBJ)
			// }
		});
}

/*****************
 * STANDARD DATA *
 *****************/

const RACES = [];

const MONSTERS = [];

const CHARACTERTYPES = [{ type: "pc" }, { type: "npc" }];

const ATTACKTYPES = [{ type: "melee" }, { type: "ranged" }, { type: "spell" }];

const DAMAGETYPES = [
	{ type: "acid" },
	{ type: "bludgeoning" },
	{ type: "fire" },
	{ type: "force" },
	{ type: "frost" },
	{ type: "lightning" },
	{ type: "necrotic" },
	{ type: "piercing" },
	{ type: "poison" },
	{ type: "psychic" },
	{ type: "radiant" },
	{ type: "slashing" },
	{ type: "thunder" },
];

/************************
 * INITIATIVE VARIABLES *
 ************************/
let unOrderedInit = [];
let orderedInit = [];
let currentPlayer = "None";
let currentInit = -1;

/********************
 * DAMAGE VARIABLES *
 ********************/
let dmgList = [];

/***************************
 * LOCAL STORAGE FUNCTIONS *
 ***************************/
/******** LOCAL STORAGE currentInit ********/
function loadLocalStorageInitPosition() {
	// Check local storage for a previous currentInit
	let storedCurrentInit = localStorage.getItem("currentInit");

	if (storedCurrentInit !== null) {
		currentInit = parseInt(storedCurrentInit);
	}
	// Store the new currentInit
	localStorage.setItem("currentInit", currentInit);
}

/******** LOCAL STORAGE orderedInit ********/
function loadLocalStorageInitList() {
	// Check local storage for a previous currentInit
	let storedOrderedInit = JSON.parse(
		localStorage.getItem("orderedInit") || "[]"
	);

	if (storedOrderedInit !== null) {
		orderedInit = storedOrderedInit;
	}
	// Store the new currentInit
	localStorage.setItem("orderedInit", JSON.stringify(orderedInit));
}

/******** LOCAL STORAGE currentPlayer ********/
function loadLocalStorageCurrentPlayer() {
	// Check local storage for a previous currentInit
	let storedCurrentPlayer = localStorage.getItem("currentPlayer");

	if (storedCurrentPlayer !== null) {
		currentPlayer = storedCurrentPlayer;
	}
	// Store the new currentInit
	localStorage.setItem("currentPlayer", currentPlayer);
}

/******** LOCAL STORAGE dmgList ********/
function loadLocalStorageDMGList() {
	// Check local storage for a previous currentInit
	let storedDmgList = JSON.parse(localStorage.getItem("dmgList") || "[]");

	if (storedDmgList !== null) {
		dmgList = storedDmgList;
	}
	// Store the new currentInit
	localStorage.setItem("dmgList", JSON.stringify(dmgList));
}

function resetALLdata() {
	localStorage.orderedInit = [];
	localStorage.currentPlayer = "None";
	localStorage.currentInit = -1;
	localStorage.dmgList = [];
	window.location.reload();
}

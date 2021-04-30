const resetAllButton = document.getElementById("resetAll");

resetAllButton.addEventListener("click", resetALLdata);


/*****************
 * STANDARD DATA *
 *****************/

let PLAYERCHARACTERS = [
	{
		name: "PC1",
		dmgInf: [],
		kills:[]
	},
	{
		name: "PC2",
		dmgInf: [],
		kills:[]
	},
	{
		name: "PC3",
		dmgInf: [],
		kills:[]
	},
	{
		name: "PC4",
		dmgInf: [],
		kills:[]
	},
	{
		name: "PC5",
		dmgInf: [],
		kills:[]
	}
]

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

const RACES = [];

const MONSTERS = [];

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

/******** LOCAL STORAGE dmgList ********/
function loadLocalStoragePlayerCharacterList() {
	// Check local storage for a previous currentInit
	let storedPLAYERCHARACTERS = JSON.parse(localStorage.getItem("PLAYERCHARACTERS") || "[]");

	if (storedPLAYERCHARACTERS !== null) {
		PLAYERCHARACTERS = storedPLAYERCHARACTERS;
	}
	// Store the new currentInit
	localStorage.setItem("PLAYERCHARACTERS", JSON.stringify(PLAYERCHARACTERS));
}


function resetALLdata() {
	localStorage.orderedInit = [];
	localStorage.currentPlayer = "None";
	localStorage.currentInit = -1;
	localStorage.dmgList = [];
	window.location.reload();
}

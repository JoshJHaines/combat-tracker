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

/**************************
 * OTHER GLOBAL VARIABLES *
 **************************/
let unOrderedInit = [];
let orderedInit = [];
//let currentInit = 0;
let currentPlayer = "";

let dmgList = [];

// Define a global currentInit variable
let currentInit = 0;

// Check local storage for a previous currentInit
let storedCurrentInit = localStorage.getItem('currentInit');

if (storedCurrentInit !== null) {
    currentInit = parseInt(storedCurrentInit);   
}
// Store the new currentInit
localStorage.setItem('currentInit', currentInit);

/*******
 * API *
 *******/
const DnDapi = `https://www.dnd5eapi.co/api/races/`;
const DnDmonstersAPI = `https://www.dnd5eapi.co/api/monsters/`;
const DnDweaponAPI = "https://api.open5e.com/weapons/";

/************
 * FUNCTION *
 ************/

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
			for (i = 0; i < data.results.length - 1; i++) {
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

/***********
 * ON LOAD *
 ***********/
murlpe();
DnDweapons();
DnDmonsters();

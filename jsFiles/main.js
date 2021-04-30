/***************************************
 * GLOBAL FUNCTIONS/REUSABLE FUNCTIONS *
 ***************************************/
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
loadLocalStorageInitPosition(currentInit);
loadLocalStorageInitList(orderedInit);
loadLocalStorageCurrentPlayer(currentPlayer);
loadLocalStorageDMGList(dmgList);
loadLocalStoragePlayerCharacterList(PLAYERCHARACTERS)
displayInitiativeStr();
murlpe();
DnDweapons();
DnDmonsters();

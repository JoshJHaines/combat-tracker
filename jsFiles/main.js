/*************
 * SELECTORS *
 *************/

const initiativeButton = document.getElementById("addToInit")
const characterName = document.getElementById("characterName")
const characterType = document.getElementById("chartype")
const initiative = document.getElementById("initiative")


/**************************
 * OTHER GLOBAL VARIABLES *
 **************************/
 let initiativeList = []

/******************
 * EVENT LISTENER *
 ******************/

initiativeButton.addEventListener("click", addToInitiativeList)

/********************
 * HELPER FUNCTIONS *
 ********************/
function addToInitiativeList (){
            // console.log("Add Character to Initiative Tracker")
            // console.log("Character Name: ", characterName.value)
            // console.log("Character Type: ", characterType.value)
            // console.log("Initiative Roll: ", initiative.value)
//create an object with the input values in initiative tracker fields
    let initiativeObj =  {}
    initiativeObj.characterName = characterName.value;
    initiativeObj.characterType = characterType.value;
    initiativeObj.initiativeRoll = initiative.value;
            // console.log(initiativeObj)
//push the obj into global variable
    initiativeList.push(initiativeObj)
            console.log(initiativeList)
}

/*************
 * SELECTORS *
 *************/

const initiativeButton = document.getElementById("addToInit")
const characterName = document.getElementById("characterName")
const characterType = document.getElementById("chartype")
const initiative = document.getElementById("initiative")


/******************
 * EVENT LISTENER *
 ******************/

initiativeButton.addEventListener("click", addToInitiative)

/********************
 * HELPER FUNCTIONS *
 ********************/
function addToInitiative (){
    console.log("Add Character to Initiative Tracker")
    console.log("Character Name: ", characterName.value)
    console.log("Character Type: ", characterType.value)
    console.log("Initiative Roll: ", initiative.value)
}
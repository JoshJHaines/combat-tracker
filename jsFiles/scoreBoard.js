const scoreBoardTable = document.getElementById("scoreBoardTable")
const tableRow = document.querySelectorAll(".row")
const pcNameColumn = document.getElementsByClassName("pcNameColumn")
const totalDmgInfColumn = document.getElementsByClassName("totalDmgInfColumn")
const totalKillsColumn = document.getElementsByClassName("totalKillsColumn")


/***************
 * BUILD TABLE *
 ***************/

/************************
 * FILL IN STATIC TABLE *
 ************************/
for (i=0; i<tableRow.length; i++){
    player = PLAYERCHARACTERS[i].name
    totalDmgInf = addARRvalues(PLAYERCHARACTERS[i].dmgInf)
    totalKills = addARRvalues(PLAYERCHARACTERS[i].kills)
    tableRow[i].innerHTML += `<td>${player}</td>`
    tableRow[i].innerHTML += `<td>${totalDmgInf}</td>`
    tableRow[i].innerHTML += `<td>${totalKills}</td>`
}
/**********************
 * ADD DMG DATA TO PC *
 **********************/
function updatePlayerScoredata(dmgObj){
    //take in dmgObj before pushed into dmgList
    //loop though Player Characters Obj
    for (pc of PLAYERCHARACTERS){
        //If name from obj = PC name
        if (dmgObj.characterName === pc.name){
            //push into PC damage
            pc.dmgInf.push(dmgObj.dmg1Inflicted)
            pc.dmgInf.push(dmgObj.dmg2Inflicted)
            //push in kill count
            if (dmgObj.killSuccess === "yes"){
                pc.kills.push(1)
            } else {
                pc.kills.push(0)
            }
        }
    }
    console.log("Players with damage?: ",PLAYERCHARACTERS)
    localStorage.setItem("PLAYERCHARACTERS", JSON.stringify(PLAYERCHARACTERS))
    console.log (`${PLAYERCHARACTERS[0].name}: dmgInf: ${PLAYERCHARACTERS[0].dmgInf}`)
}


/*******************
 * HELPER FUNCTION *
 *******************/
function addARRvalues(arr){
    arrSum = 0
    for(ind of arr){
        arrSum+=ind
    }
    console.log(arrSum)
    return arrSum
}
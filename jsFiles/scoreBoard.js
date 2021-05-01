const scoreBoardTable = document.getElementById("scoreBoardTable")
const tableRow = document.querySelectorAll(".row")
const pcNameColumn = document.querySelectorAll(".pc")
const totalDmgInfColumn = document.querySelectorAll(".totalDMG")
const totalKillsColumn = document.querySelectorAll(".totallKILLS")

//totalDmgInfColumn.addEventListener("click", testFunction())

function testFunction(){
    console.log("fuck")
}
/***************
 * BUILD TABLE *
 ***************/

/************************
 * FILL IN STATIC TABLE *
 ************************/
function loadTable(){
    for (i=0; i<tableRow.length; i++){
        const player = PLAYERCHARACTERS[i].name
        const dmgArr = PLAYERCHARACTERS[i].dmgInf
        const killArr = PLAYERCHARACTERS[i].kills
        const totalDmgInf = addARRvalues(dmgArr)
        const totalKills = addARRvalues(killArr)
        // console.log("arr: ", killArr)
        // console.log("with function:", totalDmgInf)
        tableRow[i].innerHTML += `<td class="pc">${player}</td>`
        tableRow[i].innerHTML += `<td class="totalDMG">${totalDmgInf}</td>`
        tableRow[i].innerHTML += `<td class="totallKILLS">${totalKills}</td>`
}
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
    // console.log (`${PLAYERCHARACTERS[0].name}: dmgInf: ${PLAYERCHARACTERS[0].dmgInf}`)
}


/*******************
 * HELPER FUNCTION *
 *******************/
function addARRvalues(arr){
    arrSum = 0
    for(ind of arr){
        arrSum+=ind
    }
    return arrSum
}

function updateTable(){
    for (i=0; i<totalDmgInfColumn.length ; i++){
        totalDmgInfColumn[i].innerText = 'dog'
    }
}
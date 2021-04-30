function updateScore(dmgObj){
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
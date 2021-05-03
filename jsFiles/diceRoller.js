const rollemDaddyButton = document.getElementById("rollem");
const numOfDice = document.getElementById("numOfDice");
const diceType = document.getElementById("diceType");
const mod = document.getElementById("mod");
const diceArr = document.getElementById("dice-arr");
const modBox = document.getElementById("mod-box");
const finalRoll = document.getElementById("final-roll");

rollemDaddyButton.addEventListener("click", rollemDaddy);


function rollemDaddy(){
    fullDiceRoll = []
    num = Number(numOfDice.value)
    dType = Number(diceType.value.replace(/\D/g, ""))
    modifier = Number(mod.value)

    for(i=0; i<num; i++){
        roll = getRandomNumber(dType)
        fullDiceRoll.push(roll)
    }
    console.log(fullDiceRoll)
    rollSum = addARRvalues(fullDiceRoll)
    rollWithMod = rollSum + modifier
    console.log("Full Roll Amount: ", rollWithMod)

    diceArr.innerHTML = `<p>DICE ROLL</p><h4>${fullDiceRoll}</h4>`
    modBox.innerHTML = `<p>ROLL MODIFIER</p><h4>${modifier}</h4>`
    finalRoll.innerHTML = `<p>FINAL ROLL</p><h2>${rollWithMod}</h2>`

}

const getRandomNumber = function (max) {
	const rand = Math.random();
	const range = rand * max;
	const result = Math.ceil(range);
	return result;
};
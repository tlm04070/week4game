


$("#blackMage") == blackmage;
var blackmage = {
    name: "blackmage",
    healthPoints: 400,
    attackPower: 50,
    counterAttackPower: 20, 
}



$("#goomba") == goomba;
var goomba = {
    name: "goomba",
    healthPoints: 275,
    attackPower: 75,
    counterAttackPower: 25,
}




$("#aginah") == aginah;
var aginah = {
    name: "aginah",
    healthPoints: 550,
    attackPower: 35,
    counterAttackPower: 15,
}





$("#invaders") == invaders;
var invaders = {
    name: "invaders",
    healthPoints: 600,
    attackPower: 30,
    counterAttackPower: 10,
}




console.log("testing link");

console.log($("#goomba"));
console.log($("#aginah"));
console.log($("#invaders"));

$("#bmName").append(blackmage.name);
$("#bmHealthPoints").append(blackmage.healthPoints);
$("#bmAttackPower").append(blackmage.attackPower);
$("#bmCounterAttackPower").append(blackmage.counterAttackPower);

$("#goombaName").append(goomba.name);
$("#goombaHealthPoints").append(goomba.healthPoints);
$("#goombaAttackPower").append(goomba.attackPower);
$("#goombaCounterAttackPower").append(goomba.counterAttackPower);

$("#aginahName").append(aginah.name);
$("#aginahHealthPoints").append(aginah.healthPoints);
$("#aginahAttackPower").append(aginah.attackPower);
$("#aginahCounterAttackPower").append(aginah.counterAttackPower);

$("#invadersName").append(invaders.name);
$("#invadersHealthPoints").append(invaders.healthPoints);
$("#invadersAttackPower").append(invaders.attackPower);
$("#invadersCounterAttackPower").append(invaders.counterAttackPower);













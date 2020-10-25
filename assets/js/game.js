var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//   * Fight all enemey robots
//   * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyNames) {
    while(enemyHealth > 0 && playerHealth > 0) {
        // ask player if they'd liked to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // if player chooses to fight, then fight
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm if player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyNames+ ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames+ " had died!");
            
            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead;
            break;
        } else {
                window.alert(enemyNames+ " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to updte the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyNames+ " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}

for(var i = 0; i <enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

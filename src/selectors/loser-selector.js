//this function will determine the loser of exchanges and calculate dmg
export default (playerChoice, player, enemy) => {
  let loser;
  let damage;
  const enemyChoice = cpuChoose();
  console.log(playerChoice, enemyChoice);
  if (playerChoice === enemyChoice) {
    loser = "tie";
  } else if (
    (playerChoice === "Rock" && enemyChoice === "Scissors") ||
    (playerChoice === "Paper" && enemyChoice === "Rock") ||
    (playerChoice === "Scissors" && enemyChoice === "Paper")
  ) {
    loser = "enemy";
    damage = parseInt(calculateDamage(player, enemy));
  } else {
    loser = "player";
    damage = parseInt(calculateDamage(enemy, player));
  }
  return { damage, loser, playerChoice, enemyChoice };
};

const cpuChoose = () => {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
};

const calculateDamage = (player, enemy) => {
  return player.baseAttack - enemy.baseDefense;
};

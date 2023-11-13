import Player from './classes/player';
import Enemy from './classes/enemy';
import Boss from './classes/boss';

import * as tools from './tools';
import colors from './colors';

// fonction permettant de récupérer le joueur, les énnemies aléatoirement et leurs stat
const player: Player = tools.getPlayersFromJson()[0];
const enemies: Enemy[] = tools.shuffle(tools.getEnemiesFromJson());

let floor: number = 0;

// fonction boucle de jeu
function gameLoop() {
  tools.welcomeMessage();

  for (let i: number = 0; i < enemies.length && floor < 9; i += 1) {
    const enemy: Enemy = enemies[i];
    while (enemy.isAlive && player.isAlive) {
      tools.startFighting(player, enemy, floor);
    }

    if (!enemy.isAlive) {
      console.log();
      console.log(`👏 ${colors.bg.yellow}You killed this enemy${colors.reset} 👏`);
      console.log();
    }
    floor += 1;
  }

  if (floor === 9) {
    const randomBoss: Boss = tools.shuffle(tools.getBossesFromJson())[0];

    while (randomBoss.isAlive && player.isAlive) {
      tools.startFighting(player, randomBoss, floor);
    }

    if (!randomBoss.isAlive) {
      console.log();
      console.log(`🥳🥳🥳 ${colors.bg.yellow}Congratulation !!! You defeated the boss and his army. You are a hero!!!${colors.reset} 🥳🥳🥳`);
      console.log();
    }
  }

  if (!player.isAlive) {
    console.log();
    console.log(`${colors.bg.red}💀 You have failed in saving the kingdom of Hyrule! Try again ! 💀${colors.reset}`);
    console.log();
  }
}

gameLoop();

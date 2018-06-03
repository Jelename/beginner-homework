// Variables
let hero = {
  name: 'Batman',
  heroic: true,
  inventory: [{type: 'Batarang', damage: 2}, {type: 'Grappling Gun', damage: 3}, {type :'Utility Belt Taser', damage: 2}],
  health: 5,
  weapon: {type: 'Batarang',
          damage: 2
        }
}

// Game logic
function rest(creature) {
  creature.health = 10;
  console.log(creature);
  return creature;
}

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  console.log(creature);
  return creature;
}

function dealDamage(attacker, defender) {
  defender.health -= attacker.weapon.damage;
  return defender;
}

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  console.log(creature.weapon);
  return creature;
}

//do battle function
function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic !== true) {
    return null;
  }

  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);
    console.log(creature);
    if(creature.health > 0) {
      dealDamage(creature, heroicCreature);
      if (heroicCreature.health > 0) {
        console.log(heroicCreature.health);
      } else {
        window.alert('You superhero is dead! Be stronger next time!');
      }
    } else {
      console.log('Enemy is dead! You are the best!');
      return heroicCreature;
    }
  }
}

// UI
function displayStats() {
  let heroStats = document.createTextNode(`Your superhero name is: ${hero.name}, Your superhero health is ${hero.health}, Your superhero weapon type is: ${hero.weapon.type} with the damage value of: ${hero.weapon.damage}`)
  let statsHolder = document.getElementById('stats');
  statsHolder.appendChild(heroStats);

  // let heroStats = document.getElementById('stats');
  // let heroItem = document.createElement('li');
  // let choosingItems = hero.map(function(item) )


}

function displayInventory() {
  hero.inventory.forEach(function(items) {
    let item = document.createElement('li');
    item.append(items);
    let inventoryListElement = document.getElementById('inventoryList');
    inventoryListElement.appendChild(item);
  })
}





displayStats();
displayInventory();

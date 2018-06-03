// Variables
let hero = {
  name: 'Batman',
  heroic: true,
  inventory: [{type: 'Batarang', damage: 2}, {type: 'Grappling Gun', damage: 3}, {type :'Utility Belt Taser', damage: 2}, {type: 'Knife', damage: 2}],
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
let bedPic = document.getElementById('bed');
bedPic.onclick = function() {rest(hero); updateStats()};

let weaponPic = document.getElementById('weapon');
weaponPic.onclick = function() {pickUpItem(hero, {type: 'Water gun', damage: 4}); updateStats()};

let enemyPic = document.getElementById('enemy');
enemyPic.onclick = function() {doBattle(hero, {health: 8, weapon: {damage: 2}})};

let takeWeaponPic = document.getElementById('takeWeapon');
takeWeaponPic.onclick = function() {equipWeapon(hero, window.prompt())};



//display stats function
function displayStats() {
  //name
  let heroName = document.getElementById('heroName');
  heroName.innerText = `Superhero name is: ${hero.name}`

  //health
  let heroHealthItem = document.getElementById('heroHealt');
  heroHealthItem.innerText = `Superhero health level is: ${hero.health}`;

  //weapon
  let heroWeaponItem = document.getElementById('heroWeapon');
  heroWeaponItem.innerText = `Superhero weapon is: ${hero.weapon.type}, with a level damage of: ${hero.weapon.damage}`

}


//Section 4
function displayInventory() {


  if (document.contains(document.getElementById("inventoryList"))) {
            document.getElementById("inventoryList").remove();
  }

  let inventoryListHolder = document.getElementById('inventoryListHolder');
  let inventoryList = document.createElement('ul');
  inventoryList.setAttribute('id', 'inventoryList');
  inventoryListHolder.appendChild(inventoryList);

  for(let i = 0; i < hero.inventory.length; i++) {
    let listItem = document.createElement('li');
    let listItemType = hero.inventory[i].type;
    let listItemDamage = hero.inventory[i].damage;
    listItem.innerText = `Type: ${listItemType}, Damage: ${listItemDamage}`;
                        //'type: ' + listItemType + ", Damage" + listItemDamage;
    inventoryList.appendChild(listItem);
  }
}


//update function
function updateStats() {
  displayStats();
  displayInventory();
}



//changing hero's name
function nameChanging() {
  let newName = document.getElementById('newName').value;
  document.getElementById('newName').value = null;
  hero.name = newName;
  nameShowing();
}

function nameShowing() {
  let newSuperheroName = document.getElementById('newSuperheroName');
  newSuperheroName.innerText = `Your new superhero is: ${hero.name}`;
}


displayStats();
//displayInventory();

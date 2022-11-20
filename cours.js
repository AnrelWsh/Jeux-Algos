/*let a = 4
let b = 4
let c = 3

switch (a){
    case b :
        console.log('égal à b')
        break
    case c :
        console.log('égal à c')
        break
    default:
        console.log('égal à r')
}

let a = 21
for (i=0; i<a; i++){
    console.log('oklm')
}


let a = 3
while (a < 9){
    console.log(a)
    a++
    if (a === 8){
        break
    } else if (a === 7){
        continue
    }
}

let a = "Jean"
let b = "Jean"
let result = nom(a,b)

function nom (a, b){
    if (a === b){
        return true
    } else {
        return false
    }
}

console.log(result)

let names = []
names.push("Vincent", "Paul", "Arthur")
names.forEach((name) => {
    console.log(name + " va à la pêche")
})

class Guerrier{
    constructor(attack, defense){
        this.attack = attack
        this.defense = defense
    }

    getAttack(){
        console.log(this.attack)
    }
}

let Alexis = new Guerrier(10, 5)
Alexis.getAttack()*/


/*

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp    
        this.luck = luck
    }

    
    attackPokemon(attack, defense) {
        return attack - defense
    }

    isLucky(luck) {
        if (luck > Math.random()) {
            return true
        } else {
            return false
        }
    }

}

let mypokemon = []
let sauvage = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let namepoke =["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"]


for (let i = 0; i < 6; i++) {
    mypokemon.push(new Pokemon(namepoke[getRandomInt(150)], getRandomInt(500) + 400 , getRandomInt(400), getRandomInt(1000), Math.random()))
}

console.log(mypokemon)

combat = 1

while (combat == 1) {
    if (sauvage.length == 0) {
        sauvage.push(new Pokemon(namepoke[getRandomInt(150)], getRandomInt(500) + 400 , getRandomInt(400), getRandomInt(1000), Math.random()))
    }

    let pokemon1 = mypokemon[0]
    let pokemon2 = sauvage[0]
    console.log("luck  " +pokemon1.luck)
    if (pokemon1.isLucky(pokemon1.luck)) {
        pokemon2.hp -= pokemon1.attackPokemon(pokemon1.attack, pokemon2.defense)
        console.log(pokemon2.name + " a " + pokemon2.hp + " point de vie")
    } else {
        console.log(pokemon2.name + " a esquivé l'attaque !!!")
    }

    
    if (pokemon1.hp <= 0 || pokemon2.hp <= 0) {
        life = 0
        continue
    }

    console.log(pokemon2.name + " attaque !")

    if (pokemon2.isLucky(pokemon2.luck)) {
        pokemon1.hp -= pokemon2.attackPokemon(pokemon2.attack, pokemon1.defense)
        console.log(pokemon1.name + " a " + pokemon1.hp + " point de vie")
    } else {
        console.log(pokemon1.name + " a esquivé l'attaque !!!")
    }

    if (pokemon1.hp <= 0 || pokemon2.hp <= 0) {
        life = 0
        break
    }

    if (mypokemon.length == 0) {
        console.log("Votre team est hors combat")
        break
    }
    
}*/

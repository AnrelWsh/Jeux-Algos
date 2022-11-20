class Killer{
    constructor(killerName, hp){
        this.killerName = killerName
        this.hp = hp
    }
}
const tueur = new Killer("Jason", 100)

class Feature{
    constructor(featureName, pDie, pDmg, pDieDmg){
        this.featureName = featureName
        this.pDie = pDie
        this.pDmg = pDmg
        this.pDieDmg = pDieDmg
    }
}

class Survivor{
    constructor(survivorName, feature){
        this.survivorName = survivorName
        this.feature = feature
    }
}

const survivors = []
const feature = []

const nameSurv =["Tom","Gislaine","Cabanne","Lisa","Kimber","Mat","Brouck","Malo","Bonny","Brad","Bonny","Sharone","Darell","Cody","Zack"]
const nameFeature =["Nonne","Chat","Blondasse","Crasseux","Gars banal","Fauteuil","Biglouche","Nerdy","Gamer","Stonner"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function generateSurvivor(){
    let rand1 = randBetween(0,10) 
    let rand2 = randBetween(0,10 - rand1) 
    let rand3 = 10 - rand2 -rand1

    const feature = new Feature(nameFeature[getRandomInt(5)], rand1, rand2, rand3)
    return new Survivor(nameSurv[getRandomInt(10)], feature)
}

for (let i = 0; i < 5; i++) {
    survivors.push(generateSurvivor())
}

while (tueur.hp > 0 && survivors.length > 0){
    let bigRand = randBetween(0,10)
    if (bigRand <= survivors[0].feature.pDie){
        console.log("Ouille " + survivors[0].survivorName + " est dead 😵")
        console.log("Il reste encore " + tueur.hp + " points de vie à " + tueur.killerName + ", le tueur 🔪")
        survivors.shift()
        console.log("========================================================")
        continue
    }else if (bigRand <= survivors[0].feature.pDmg){
        tueur.hp -= 10
        console.log("Oh ! " +survivors[0].survivorName + " a veski et a donné 10 coups à " + tueur.killerName + " le tueur! 👊")

        if (tueur.hp <= 0){
            console.log("Il ne reste plus de points de vie à " + tueur.killerName + ", le tueur 🔪")
        }else {
            console.log("Il reste encore " + tueur.hp + " points de vie à " + tueur.killerName + ", le tueur 🔪")
        }
        
        console.log("========================================================")
        continue
    }else{
        tueur.hp -= 15
        console.log("Oh ! " + survivors[0].survivorName + " est dead mais a donné 15 coups à " + tueur.killerName + " le tueur! 👊😵")

        if (tueur.hp <= 0){
            console.log("Il ne reste plus de points de vie à " + tueur.killerName + ", le tueur 🔪")
        }else {
            console.log("Il reste encore " + tueur.hp + " points de vie à " + tueur.killerName + ", le tueur 🔪")
        }

        survivors.shift()
        console.log("========================================================")
        continue
    }

    
}
const img = document.getElementById("img")
const result = document.getElementById("result")

if (tueur.hp <= 0){
    console.log("==============================")
    console.log('|| Le tueur est mort! 😱🥵 ||')
    console.log("==============================")
    result.innerHTML = "<span style='color: orange '>Le tueur est mort! 😱🥵</span>"
    img.src = "img/coffin.gif"
} else if (survivors.length == 0 && tueur.hp == 100){
    console.log("=========================================================================================")
    console.log("|| La team est morte sans donner un coup au tueur... ce fut un massacre... 😵🔪😵🔪😵||")
    console.log("=========================================================================================")
    result.innerHTML = "<span style='color: orange '>La team est morte sans donner un coup au tueur... ce fut un massacre... 😵🔪😵🔪😵</span>"
    img.src = "img/killer.gif"
} else if (survivors.length == 0 && tueur.hp <= 0){
    console.log("========================================================================================================")
    console.log("|| La team est morte mais a réussi à donner un coup fatal au tueur... quelle boucherie... 🔪🩸🔪🩸🔪||")
    console.log("========================================================================================================")
    result.innerHTML = "<span style='color: orange '>La team est morte mais a réussi à donner un coup fatal au tueur... quelle boucherie... 🔪🩸🔪🩸🔪</span>"
    img.src = "img/massacre.gif"
} else {
    console.log("===================================")
    console.log("|| La team est morte 😵🪦😵🪦😵||")
    console.log("===================================")
    result.innerHTML = "<span style='color: orange '>La team est morte 😵🪦😵🪦😵</span>"
    img.src = "img/cemetary.gif"
}

 
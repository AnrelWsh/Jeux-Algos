class Perso{
    constructor(name, mh){
        this.name = name
        this.mh = mh
    }

    getPerso(){
        console.log(this.name, this.mh)
    }
}

let perso = new Perso("John", 10)

console.log("Bienvenue sur cette course :") 
perso.getPerso()

let playlist = [
    {
        artist: "PLK",
        title: "Idiote",
        damage: "0"
    },
    {
        artist: "Rilès",
        title: "Champion",
        damage: "0"
    },
    {
        artist: "SCH",
        title: "RAC",
        damage: "0"
    },
    {
        artist: "NyanCat",
        title: "Nyan Cat",
        damage: "0"
    },
    {
        artist: "Wejdene",
        title: "Anissa",
        damage: "1"
    }
]

function randomSong(playlist) {
    const random = Math.floor(Math.random() * playlist.length)
    const item = playlist[random]
    return item
}

let feu = 30

const img = document.getElementById("img")
const result = document.getElementById("result")

while (feu > 0){
    feu --
    let rdmSong = randomSong(playlist)
    perso.mh -= rdmSong.damage
    console.log("Il vous reste encore " + feu + " feux jusqu'à chez vous !")
    console.log("C'est parti pour " + rdmSong.title + " de " + rdmSong.artist)
    console.log("Et il vous reste encore " + perso.mh + " points de santé mentale 😈")
    console.log("=========================================================")
    if (perso.mh == 0){
        img.src = "../img/wejdene.gif"
        console.log("Vous avez explosé 💥💥")
        result.innerHTML = "<span style='color: orange '>Vous avez explosé 💥💥</span>"
        break
    }
}

if (perso.mh > 0){
    img.src = "../img/congrats.gif"
    console.log("WAW, t'as survécu à la déesse Wejdene !")
    result.innerHTML = "<span style='color: orange '>WAW, t'as survécu à la déesse Wejdene !</span>"
}
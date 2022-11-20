const b1 = document.getElementById("baton1")
const b2 = document.getElementById("baton2")
const b3 = document.getElementById("baton3")
const b4 = document.getElementById("baton4")
const b5 = document.getElementById("baton5")
const b6 = document.getElementById("baton6")
const b7 = document.getElementById("baton7")

const textChosen = document.getElementById("chosen")

const changeBtn = document.getElementById("changeBtn")

const end = document.getElementById("end")

const player = document.getElementById("player")

const baton = document.getElementsByClassName("baton")

const batons = []

batons.push(b1, b2, b3, b4, b5, b6, b7)

console.log(batons)

const batoons = []



batons.forEach (item => {

    
    item.addEventListener("click", () => {
        
        batons[0].remove()
        batons.shift()
        let nbChosen = 7 - batons.length
        textChosen.innerHTML = "<span style='color: red '>" + nbChosen + "</span>"

        joueur = 0
        changeBtn.addEventListener("click", () => {
            joueur = 0
            nbChosen = 0
            joueur =+ 1
            textChosen.innerHTML = "<span style='color: red '>0</span>"
            /*nbChosen =- batons.length 
            textChosen.innerHTML = "<span style='color: red '>" + nbChosen + "</span>"*/
            console.log(joueur)
        })
        

        if (batons.length ==  0){
            end.innerHTML = "<span style='color: red '>Jeu finiiiiiii</span>"
            if (joueur % 2 == 0){
                player.innerHTML = "<span style='color: red '>Joueur 1 a gagné</span>"
            }else{
                player.innerHTML = "<span style='color: red '>Joueur 2 a gagné</span>"
            }
        }

    })
})


console.log("Ce n'est pas du Wejdene mais ce jeu de Nim m'a quand même explosé mon crâne")


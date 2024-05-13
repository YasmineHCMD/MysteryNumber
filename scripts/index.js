console.log("Yo!");

let getal = 0;

let mysteryNumber = Math.random() * 6

mysteryNumber = Math.round (mysteryNumber)

console.log (mysteryNumber)

const plusKnop = document.querySelector ("#plus")

const minKnop = document.querySelector ("#min")

const controleerKnop = document.querySelector("#antwoord")

const getalVeld = document.querySelector ('h1')

const pElement = document.querySelector ("p")

function GetalHoger() {
    getal = getal + 1;
    updateGetal();
}

function GetalLager() {
    getal = getal - 1;
    updateGetal();
}

function updateGetal() {
    console.log("getal: " + getal);
    getalVeld.textContent = getal;
}

function controleerGetal(){
    console.log("Controleert getal")
        if (getal === mysteryNumber){
            console.log ("Goed geraden!")
            pElement.textContent = "Goed geraden!"
        }
        else if (getal < mysteryNumber){
            console.log ("Helaas, te laag..")
            pElement.textContent = "Helaas, te laag."
        }

        else if (getal > mysteryNumber){
        console.log ("Helaas, te hoog..")
        pElement.textContent = "Helaas, te hoog."
        }
    }

plusKnop.addEventListener('click', GetalHoger)

minKnop.addEventListener('click', GetalLager)

controleerKnop.addEventListener('click', controleerGetal)



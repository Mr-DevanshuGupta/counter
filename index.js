//document.getElementById("count-el").innerText = 5

let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")



let count = 0;

function increment() {

    count++;
    countEL.textContent = count;

}

function save() {
    let sav = count + " - "
    saveEL.textContent += sav
    count = 0
    countEL.textContent = count
}



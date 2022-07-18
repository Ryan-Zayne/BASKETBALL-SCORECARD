let homeScore = 0;
let guestScore = 0;
document.getElementById("home-card").textContent = homeScore;
document.getElementById("guest-card").textContent = guestScore;
let one = document.getElementsByClassName("plus-one");
let two = document.getElementsByClassName("plus-two");
let three = document.getElementsByClassName("plus-three");

/* These for..in loops iterate through their respective ClassName arrays (by their index keys i.e 0 , 1, 2 ....) to assign each array object to a specified string */
for (let elem in one) {
    one[elem].textContent = "+1";
};

for (let elem in two) {
    two[elem].textContent = "+2";
};

for (let elem in three) {
    three[elem].textContent = "+3";
};


function addOneHome() {
    homeScore += 1
    document.getElementById("home-card").textContent = homeScore;
    highlight();
};

function addTwoHome() {
    homeScore += 2
    document.getElementById("home-card").textContent = homeScore;
    highlight();
};

function addThreeHome() {
    homeScore += 3
    document.getElementById("home-card").textContent = homeScore;
    highlight();
};

function addOneGuest() {
    guestScore += 1
    document.getElementById("guest-card").textContent = guestScore;
    highlight();
};

function addTwoGuest() {
    guestScore += 2
    document.getElementById("guest-card").textContent = guestScore;
    highlight();
};

function addThreeGuest() {
    guestScore += 3
    document.getElementById("guest-card").textContent = guestScore;
    highlight();
};


function reset() {
    guestScore = 0
    document.getElementById("guest-card").textContent = guestScore
    homeScore = 0
    document.getElementById("home-card").textContent = homeScore;

    let scoreCard = document.getElementById("home-card")
    scoreCard.classList.remove("highlight")

    let scoreCard2 = document.getElementById("guest-card")
    scoreCard2.classList.remove("highlight")
};


function highlight() {
    if (homeScore > guestScore) {
        let scoreCard = document.getElementById("home-card")
        scoreCard.classList.add("highlight")

        let scoreCard2 = document.getElementById("guest-card")
        scoreCard2.classList.remove("highlight")

    } else if(homeScore === guestScore){
        let scoreCard = document.getElementById("home-card")
        scoreCard.classList.remove("highlight")

        let scoreCard2 = document.getElementById("guest-card")
        scoreCard2.classList.remove("highlight")
        
    } else {
        let scoreCard2 = document.getElementById("guest-card")
        scoreCard2.classList.add("highlight")

        let scoreCard = document.getElementById("home-card")
        scoreCard.classList.remove("highlight")
    };
}

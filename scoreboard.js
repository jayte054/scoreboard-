let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
function add1() {
    homeCount = homeCount + 1
    homeScore.textContent = homeCount
}
function add2() {
    homeCount+= 2
    homeScore.textContent = homeCount
}
function add3() {
    homeCount += 3
    homeScore.textContent = homeCount
}
let guestCount = 0
function guest1() {
    guestCount += 1
     guestScore.textContent = guestCount
}
function guest2() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function guest3() {
    guestCount += 3
     guestScore.textContent = guestCount
    }

    let quarterNumber = document.getElementById("quarter-number")
    let quarter = 0
    function changeQuarter(){
        quarter += 1
        quarterNumber.textContent = quarter
    }
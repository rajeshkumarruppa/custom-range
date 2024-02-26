let toUserInputEl = document.getElementById("toUserInput");
let fromUserInputEl = document.getElementById("fromUserInput");
let counterTextEl = document.getElementById("counterText");
let startBtnEl = document.getElementById("startBtn");

function displayCounter(fromval, toval) {
    let Counter = fromval;
    counterTextEl.textContent = Counter;

    let UniqueId = setInterval(function() {
        if (Counter < toval) {
            Counter = Counter + 1;
            counterTextEl.textContent = Counter;
        } else {
            clearInterval(UniqueId);
            counterTextEl.textContent = "END";
        }
    }, 1000);
}


startBtnEl.onclick = function() {
    let userfromvalue = fromUserInputEl.value;
    let userTovalue = toUserInputEl.value;
    if (userfromvalue === "") {
        alert("enter from Value");

    } else if (userTovalue === "") {
        alert("enter to Value");
    } else {
        let parsefrom = parseInt(userfromvalue);
        let parseto = parseInt(userTovalue);
        displayCounter(parsefrom, parseto);
    }
};
const submitButton   = document.querySelector("#subBTN");
const emailInput     = document.querySelector("#emailInput");
const passInput      = document.querySelector("#passInput");
const correct        = document.querySelectorAll(".correct");
const wrong          = document.querySelectorAll(".wrong");
const passLengh      = 16;
const chars          = {
    "special": "!@#$%¨&*()_+^~",
    "numbers": "0123456789",
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

const charsLength = 76;

function generateRandomPass() {
    let pass  = "";

    for(i = 0; i < passLengh; i++) {
        let charType = getRndInteger(0, 4);
        let type = chars[Object.keys(chars)[charType]];
        pass += type[getRndInteger(0, type.length)];
    };

    if(!pass.match(/[a-z]/g) || !pass.match(/[A-Z]/g) || !pass.match(/[0-9]/g) || !pass.match(/[!@#$%¨&*()_+^~]/g)) { // check if pass is valid;
        console.log("Invalid Pass!", pass);
        return generateRandomPass()
    };

    passInput.value = pass;  
    passInput.type  = "text";
    passChanged(passInput);
}

function passChanged(el = passInput) {
    let value = el.value;
    let error = 0;
    if(value.length >= passLengh) showHide(0, 1)  
    else showHide(0), error++;

    if(value.match(/[0-9]/g)) showHide(1, 1);
    else showHide(1), error++;

    if(value.match(/[A-Z]/g)) showHide(2, 1);
    else showHide(2), error++;

    if(value.match(/[a-z]/g)) showHide(3, 1);
    else showHide(3), error++;

    if(value.match(/[!@#$%¨&*()_+^~]/g)) showHide(4, 1);
    else showHide(4), error++;

    if(emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)) showHide(5, 1)
    else showHide(5), error++;

    if(!error) submitButton.classList.remove("disabled");
    else submitButton.classList.add("disabled");
}

function showHide(el, event) {
    if(event == 1) { // 1 = correct
        correct[el].classList.add("d-inline");
        correct[el].classList.remove("d-none");
        wrong[el].classList.add("d-none");
        wrong[el].classList.remove("d-inline");
    } else {
        correct[el].classList.remove("d-inline");
        correct[el].classList.add("d-none");
        wrong[el].classList.remove("d-none");
        wrong[el].classList.add("d-inline");
    }
}
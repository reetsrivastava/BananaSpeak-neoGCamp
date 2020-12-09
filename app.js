var textInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#submit");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL+"?text="+input;
}

function errorHandler(error) {
    console.log("Error Occurred",error);
    alert("Some error occurred, Please try again after some time!");
}

function clickHandler() {
    var inputTxt = textInput.value;

    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then( json => {
        var minionText = "error";
        outputDiv.innerText = minionText;
        
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);
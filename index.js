//add eventlistener to every rate button

var numberOfButtons = document.querySelectorAll(".rate-button").length;

var lastSelected = null; // we create a var just to know the last button clicked, so we can dis-select it of user clicks other button

for (var i = 0; i < numberOfButtons; i++){

    document.querySelectorAll(".rate-button")[i].addEventListener("click", function() {
        
        if (lastSelected) {

            lastSelected.classList.remove("pressed");
            lastSelected.classList.add("grey");

        }

        var buttonIdentity = this.innerHTML; // this gets the number clicked (html)
        // console.log(buttonIdentity);

        var buttonClicked = document.getElementById(buttonIdentity);
        buttonClicked.classList.add("pressed");
        buttonClicked.classList.remove("grey");
        
        lastSelected = this;
    });

    
}

// add eventlistener for the submit button

document.getElementById("submit").addEventListener("click", function() {

    document.querySelector(".rate").classList.add("hide");
    document.querySelector(".thank-you").classList.remove("hide");

    document.querySelector(".rate-selection").innerHTML = "You selected " + lastSelected.innerHTML + " out of 5";
         
});
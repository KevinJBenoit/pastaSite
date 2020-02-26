//make sure DOM is loaded before proceeding
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', convert3);
}
else {
    convert3();

}

function convert3() {
    var ingredient = document.getElementById("convertButton");
    ingredient.addEventListener('click', function(event) {
        //the option selected by user
        var option = document.getElementById("ingredient");

        //bunch of if else to display which option was selected\
        if (option.value === "wine") {
            var text = "1/3 cup white wine"
        }
        else if (option.value === "capers") {
            var text = "1/4 cup capers"
        }
        else if (option.value === "olives") {
            var text = "1/4 cup black olives"
        }
        else if (option.value === "tomatoes") {
            var text = "1 to 1.5 cup whole peeled tomatoes with sauce"
        }
        var textNode = document.createTextNode(text);
        var display = document.getElementById("conversion");

        if (display.childNodes.length > 0) {
            display.removeChild(display.childNodes[0]);
        }
        display.appendChild(textNode);

        event.preventDefault();
    })
}
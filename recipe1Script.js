//make sure DOM is loaded before proceeding
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', convert1);
}
else {
    convert();

}

function convert1() {
    var ingredient = document.getElementById("convertButton");
    ingredient.addEventListener('click', function(event) {
        //the option selected by user
        var option = document.getElementById("ingredient");

        //bunch of if else to display which option was selected\
        if (option.value === "bacon") {
            var text = "2-3 slices thick cut bacon"
        }
        else if (option.value === "tomatoes") {
            var text = "2 cups whole peeled stomates with sauce"
        }
        else if (option.value === "wine") {
            var text = "1/2 cup white wine"
        }
        else if (option.value === "cheese") {
            var text = "1/2 cup grated cheese"
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
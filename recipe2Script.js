//make sure DOM is loaded before proceeding
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', convert2);
}
else {
    convert2();

}

function convert2() {
    var ingredient = document.getElementById("convertButton");
    ingredient.addEventListener('click', function(event) {
        //the option selected by user
        var option = document.getElementById("ingredient");

        //bunch of if else to display which option was selected\
        if (option.value === "flour") {
            var text = "3 1/4 cups flour"
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
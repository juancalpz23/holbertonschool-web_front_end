function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    function addButton(text, mode) {
        let button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", mode);
        document.body.appendChild(button);
    }

    addButton("Spooky", spooky);
    addButton("Dark mode", darkMode);
    addButton("Scream mode", screamMode);
}

main();

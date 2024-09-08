function createElement(data) {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode(data);
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(
        "GET",
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow"
    );

    xhttp.responseType = "json";
    xhttp.send();
    xhttp.onload = () => callback(xhttp.response.query.pages["21721040"].extract);
}

queryWikipedia(createElement());
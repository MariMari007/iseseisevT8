function printAwesome() {
    var resultDiv = document.getElementById("result");

    if (!resultDiv) {
        resultDiv = document.createElement("div");
        resultDiv.setAttribute("id", "result");
        document.body.appendChild(resultDiv);
    } else {
        resultDiv.innerHTML = "";
    }

    for (var i = 1; i <= 10; i++) {
        var paragraph = document.createElement("p");
        paragraph.textContent = i + ". I am awesome!";
        resultDiv.appendChild(paragraph);
    }
}

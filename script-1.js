function logHtmlObject() {
    console.log($("#teste1"));
}

function manipulateAttributes() {
    $("#teste2").attr("style", "width: 400px; height: 200px; background-color: blue;");
}

function manipulateInnerHtml() {
    $("#teste2").html("<p>Olá, eu sou um parágrafo criado dinamicamente!</p>");
}

$(manipulateInnerHtml);
function logHtmlObject() {
    console.log($("#teste1"));
}

function manipulateAttributes() {
    $("#teste1").attr("src", "img/esfera_2.png");
}

$(manipulateAttributes);
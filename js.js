
var leonardo = window.document.getElementById("leonardo");
var bruna = window.document.getElementById("bruna");
var samantha = window.document.getElementById("samantha");
var setaEsquerda = window.document.getElementById("seta-esquerda");
var setaDireita = window.document.getElementById("seta-direita");


function CarrosselDireita () {
    samantha.style.display = "none";
    setaEsquerda.style.display = "flex";
    setaDireita.style.display = "none";
    bruna.style.display = "flex";
}

function CarrosselEsquerda () {
    bruna.style.display = "none";
    setaDireita.style.display = "flex";
    samantha.style.display = "flex";
    setaEsquerda.style.display = "none";
}
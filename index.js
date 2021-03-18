function valorcorrida(base, km, valorKm, tempo, valorTempo, tempoEspera, valorTempoEspera, dinamico){

    var total = (base + (km * valorKm) + (tempo * valorTempo) + (tempoEspera * valorTempoEspera)) * dinamico;

    return total;
}

function soma(precoBase, inputKm, inputTempo, inputTempoEspera, inputDinamico, precoKm, precoTempo, precoTempoEspera, inputValorCorrida){

    var km = document.getElementById(inputKm).value;
    var tempo = document.getElementById(inputTempo).value;
    var tempoEspera = document.getElementById(inputTempoEspera).value;
    var dinamico = document.getElementById(inputDinamico).value;

    if(dinamico == 0){
        dinamico = 1
    }

    var valorTotal = Math.round(valorcorrida(precoBase, km, precoKm, tempo, precoTempo, tempoEspera, precoTempoEspera, dinamico)*100)/100;

    return document.getElementById(inputValorCorrida).value = "R$ " + valorTotal;

}

function limpa(inputKm, inputTempo, inputDinamico, inputTempoEspera, inputValorCorrida) {
    
    document.getElementById(inputKm).value = "";
    document.getElementById(inputTempo).value = "";
    document.getElementById(inputDinamico).value = "";
    document.getElementById(inputTempoEspera).value = "";
    document.getElementById(inputValorCorrida).value = "";
}

// ############################################################################

let uberX = {
    valorBase: 1.5,
    valorKm: 1.05,
    valorMinuto: 0.195,
    valorMinEspera: 0.195
}   

let uberConfort = {
    valorBase: 2.25,
    valorKm: 1.2074,
    valorMinuto: 0.2475,
    valorMinEspera: 0.2475
}

let uberBag = {
    valorBase: 2.25,
    valorKm: 1.26,
    valorMinuto: 0.22,
    valorMinEspera: 0.22
}

let uberBlack = {
    valorBase: 3.04,
    valorKm: 1.8559,
    valorMinuto: 0.224,
    valorMinEspera: 0.224
}

//###################################_uberX_###################################

function valorCorridaUberX(){
    soma(uberX.valorBase, "kmX", "tempoX", "tempoEsperaX", "dinamicoX", uberX.valorKm, uberX.valorMinuto, uberX.valorMinEspera, "valorCorridaX")
}

var buttonX = document.getElementById("buttonX");
buttonX.onclick = valorCorridaUberX;

function limpaInputX(){
    limpa("kmX", "tempoX", "dinamicoX", "tempoEsperaX", "valorCorridaX")
}

var limparX = document.getElementById("limparX");
limparX.onclick = limpaInputX;

//###################################_uberConfort_###################################

function valorCorridaConfort(){
    soma(uberConfort.valorBase, "kmConfort", "tempoConfort", "tempoEsperaConfort", "dinamicoConfort", uberConfort.valorKm, uberConfort.valorMinuto, uberConfort.valorMinEspera, "valorCorridaConfort");
}

var buttonConfort = document.getElementById("buttonConfort");
buttonConfort.onclick = valorCorridaConfort;

function limpaInputConfort(){
    limpa("kmConfort", "tempoConfort", "tempoEsperaConfort", "dinamicoConfort", "valorCorridaConfort");
}

var limparConfort = document.getElementById("limparConfort");
limparConfort.onclick = limpaInputConfort;

//###################################_uberBag_###################################

function valorCorridaBag(){
    soma(uberBag.valorBase, "kmBag", "tempoBag", "tempoEsperaBag", "dinamicoBag", uberBag.valorKm, uberBag.valorMinuto, uberBag.valorMinEspera, "valorCorridaBag");
}

var buttonBag = document.getElementById("buttonBag");
buttonBag.onclick = valorCorridaBag;

function limpaInputBag(){
    limpa("kmBag", "tempoBag", "tempoEsperaBag", "dinamicoBag", "valorCorridaBag");
}

var limparBag = document.getElementById("limparBag");
limparBag.onclick = limpaInputBag;

//###################################_uberBlack_###################################

function valorCorridaBlack(){
    soma(uberBlack.valorBase, "kmBlack", "tempoBlack", "tempoEsperaBlack", "dinamicoBlack", uberBlack.valorKm, uberBlack.valorMinuto, uberBlack.valorMinEspera, "valorCorridaBlack");
}

var buttonBlack = document.getElementById("buttonBlack");
buttonBlack.onclick = valorCorridaBlack;

function limpaInputBlack(){
    limpa("kmBlack", "tempoBlack", "tempoEsperaBlack", "dinamicoBlack", "valorCorridaBlack");
}

var limparBlack = document.getElementById("limparBlack");
limparBlack.onclick = limpaInputBlack;

//###################################_particular_###################################

function valorCorridaParticular(){
    
    var kilometro = parseFloat(document.getElementById("km-particular").value);
    var base = parseFloat(document.getElementById("base-particular").value);
    var minuto = parseFloat(document.getElementById("minuto-particular").value);
    
    soma(base, "kmParticular", "tempoParticular", "tempoEsperaParticular", "dinamicoParticular", kilometro, minuto, minuto, "valorCorridaParticular");
}

var buttonParticular = document.getElementById("buttonParticular");
buttonParticular.onclick = valorCorridaParticular;

function limpaInputParticular(){
    limpa("kmParticular", "tempoParticular", "tempoEsperaParticular", "dinamicoParticular", "valorCorridaParticular");
}

var limparParticular = document.getElementById("limparParticular");
limparParticular.onclick = limpaInputParticular;
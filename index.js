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



//###################################_uberX_###################################

function valorCorridaUberX(){
    soma(1.5, "kmX", "tempoX", "tempoEsperaX", "dinamicoX", 1.05, 0.195, 0.195, "valorCorridaX")
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
    soma(2.25, "kmConfort", "tempoConfort", "tempoEsperaConfort", "dinamicoConfort", 1.2074, 0.2475, 0.2475, "valorCorridaConfort");
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
    soma(2.25, "kmBag", "tempoBag", "tempoEsperaBag", "dinamicoBag", 1.26, 0.22, 0.22, "valorCorridaBag");
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
    soma(3.04, "kmBlack", "tempoBlack", "tempoEsperaBlack", "dinamicoBlack", 1.8559, 0.224, 0.224, "valorCorridaBlack");
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
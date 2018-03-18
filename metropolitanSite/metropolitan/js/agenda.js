$(document).ready(function(){

    var proximoEvento = getIdProximoEvento();
    var eventosAdicionais = 0;
    var proximoelement   = null;
    
    if(proximoEvento) {    
        proximoelement = proximoEvento;
        alteraStyle(proximoEvento);
        if(proximoEvento.children) {
            if(proximoEvento.children[0]) {
                if(proximoEvento.children[0].attributes.rowspan) var eventosAdicionais = proximoEvento.children[0].attributes.rowspan.value - 1;
            }
        } 
    }
    if(eventosAdicionais > 0) {
        for(var i = 0;  i < eventosAdicionais; i++) {
            proximoelement = proximoelement.nextElementSibling;
            alteraStyle(proximoelement);
        }
    }
});

function getIdProximoEvento() {
    var now = new Date;
    var mesAtual = String(now.getMonth()+1);
    var diaAtual = now.getDate();
    dia = String(diaAtual);
    if(mesAtual.length < 2) mesAtual = '0'.concat(mesAtual);
    return verificaEventoProximosDias(dia, mesAtual);
}

function verificaEventoProximosDias(diaAtual, mesAtual) {
    var diasProximoMes   = diaAtual;
    var idProximoEvento  = null;
    for(diaTeste = parseInt(diaAtual); diaTeste < 31; diaTeste++) {
        if (diaTeste.toString().length == 1) diaFormatado = String("0"+diaTeste);
        else diaFormatado = String(diaTeste);
        idProximoEvento = diaFormatado.concat(String(mesAtual));
        if(document.getElementById(idProximoEvento)) return document.getElementById(idProximoEvento);
    }

    if(diasProximoMes > 0) {
        mesAtual += 1;
        for(diaTeste = 1; diaTeste < diasProximoMes; diaTeste++) {
            if (diaTeste.toString().length == 1) diaFormatado = String("0"+diaTeste);
            else diaFormatado = String(diaTeste);
            idProximoEvento = diaFormatado.concat(String(mesAtual));
            if(document.getElementById(idProximoEvento)) return document.getElementById(idProximoEvento);
        }
    }

    return null;
}


function alteraStyle(element) {
    alteraStyleButton(element.children);
    element.style.backgroundColor = "#4f2b7a";
    element.style.color           = "white"; 
}

function alteraStyleButton(children) {
    element = children[children.length - 1];
    element.children[0].style.backgroundColor = "#4f2b7a";
    
}
    
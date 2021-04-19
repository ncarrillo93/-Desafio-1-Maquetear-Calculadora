var n1;
var n2;
var operacion;
function init() {
    //variables
    var resultado      = document.getElementById('resultado');
    var reset          = document.getElementById('all-clear');
    var suma           = document.getElementById('suma');
    var resta          = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division       = document.getElementById('division');
    var igual          = document.getElementById('igual');
    var uno            = document.getElementById('uno');
    var dos            = document.getElementById('dos');
    var tres           = document.getElementById('tres');
    var cuatro         = document.getElementById('cuatro');
    var cinco          = document.getElementById('cinco');
    var seis           = document.getElementById('seis');
    var siete          = document.getElementById('siete');
    var ocho           = document.getElementById('ocho');
    var nueve          = document.getElementById('nueve');
    var cero           = document.getElementById('cero');
}

init();
//Eventos de click
uno.onclick    = function (e) { resultado.textContent = resultado.textContent + "1"; console.log(resultado.textContent); }
dos.onclick    = function (e) { resultado.textContent = resultado.textContent + "2"; console.log(resultado.textContent); }
tres.onclick   = function (e) { resultado.textContent = resultado.textContent + "3"; console.log(resultado.textContent); }
cuatro.onclick = function (e) { resultado.textContent = resultado.textContent + "4"; console.log(resultado.textContent); }
cinco.onclick  = function (e) { resultado.textContent = resultado.textContent + "5"; console.log(resultado.textContent); }
seis.onclick   = function (e) { resultado.textContent = resultado.textContent + "6"; console.log(resultado.textContent); }
siete.onclick  = function (e) { resultado.textContent = resultado.textContent + "7"; console.log(resultado.textContent); }
ocho.onclick   = function (e) { resultado.textContent = resultado.textContent + "8"; console.log(resultado.textContent); }
nueve.onclick  = function (e) { resultado.textContent = resultado.textContent + "9"; console.log(resultado.textContent); }
cero.onclick   = function (e) { resultado.textContent = resultado.textContent + "0"; console.log(resultado.textContent); }
reset.onclick  = function (e) { resetear(); }

suma.onclick = function (e) {
    n1 = resultado.textContent;
    operacion = "+";
    console.log(operacion);
    limpiar();
}
resta.onclick = function (e) {
    n1 = resultado.textContent;
    operacion = "-";
    console.log(operacion);
    limpiar();
}
multiplicacion.onclick = function (e) {
    n1 = resultado.textContent;
    operacion = "*";
    console.log(operacion);
    limpiar();
}
division.onclick = function (e) {
    n1 = resultado.textContent;
    operacion = "/";
    console.log(operacion);
    limpiar();
}
igual.onclick = function (e) {
    n2 = resultado.textContent;

    resolver();
}

function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "0";
    n1 = 0;
    n2 = 0;
    operacion = "";
    console.log(resultado.textContent);
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(n1) + parseFloat(n2)
            console.log(res);
            break;
        case "-":
            res = parseFloat(n1) - parseFloat(n2);
            console.log(res);
            break;
        case "*":
            res = parseFloat(n1) * parseFloat(n2);
            console.log(res);
            break;
        case "/":
            res = parseFloat(n1) / parseFloat(n2);
            console.log(res);
            break;
    }
    resetear();
    resultado.textContent = res;
}
var hora = parseInt(prompt("Cual hora es?"));

if (hora >= 8) {
    mensaje = "Puedes seguir durmiendo";
}

else if (hora > 8 && hora < 14) {
    mensaje = "Llegas en hora";
}

if (hora > 14 && hora < 15) {
    mensaje ="Che llegas tarde vago";
    }

else {
    mensaje ="yo no quiero trabajar no quiero ir a estudiar"
}

alert(mensaje)
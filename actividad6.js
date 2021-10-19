var hora = parseInt(prompt("¿Qué hora es?"));
if (hora =="") {
     alert ('No has introducido hora');
}

switch(hora) {
    case 8:
        alert("Temprano todavia");
    break;
    case 14:
        alert("levantate vago")
    break;
    case 15:
        alert("Ya ni te levantes, segui de largo")
    break;
    default:
        alert("A que hora master"); break;
}



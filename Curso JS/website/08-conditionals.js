// if, else if, else

//if
let age = 20;
if (age >= 18) {
    console.log("Eres mayor de edad");
}
// else if
else if (age >= 13) {
    console.log("Eres un adolescente");
}
// else
else {
    console.log("Eres un niño");
}

//operador ternario
let isAdult = (age >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(isAdult); // Imprime: "Eres mayor de edad" si age es



// switch
let day = 8; // Supongamos que 1 es lunes, 2 es martes, etc.
switch (day) {
    case 1: "Lunes";
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sábado");
        break;
    case 7:
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Día inválido");
        break;
}

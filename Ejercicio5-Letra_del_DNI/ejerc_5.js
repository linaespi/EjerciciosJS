/*Numeral 1*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let DNI = prompt("Ingrese su DNI sin letra", "12345678");

/*Numeral 2*/

//if(person !=null){
if (DNI < 0 || DNI > 99999999) {
    alert("El numero proporcionado no es válido")

}

else if (DNI < 0 || DNI > 99999999 == false) {
    const letra = DNI % 23
    for (let i = 0; i <= letras.length; i++) {


        if (letra == i) {
            alert(letras[letra])
        }
    }
}
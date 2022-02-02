console.log('hola');

//base 16 *23 cm y altura de 13 cm

const volumen=13*23*16;
console.log('volumen',volumen + ' cm3');

//Area total= area lateral + 2*area base
const areaLateral=23*13;
const areaBase=16*23;
const areaTotal= areaLateral+2*areaBase;
console.log('Area Total', areaTotal + ' cm2');

//AreaTotal para cambiar solo los valores de los lados
const base=23;
const altura=13;
const ancho=16;

const volumen2=base*altura*ancho;
console.log('Volumen2', volumen2 +' cm3');

const area2=base *altura + 2 * base *ancho;
console.log('Area2', area2 + 'cm3');
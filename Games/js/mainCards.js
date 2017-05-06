var cartas = []; // contiene todas las cartas
var parejasAcertadas=[]; // donde vamos metiendo las que vaya acertando, hasta que falle, que se vacía
var cartaAnterior = cartas[i]; //la que hayas hecho click primero. Se resetea
var cartaActual = cartas[i]; //la que hayas hecho click a continuación. Se resetea

var puntuacion = 0; //puntuación total
var puntosPorAcierto = 10; //puntos que le damos por cada acierto de pareja
var penalizacionPorFallo = 5; //puntos que le restamos por cada fallo de pareja.
//¿¿Permitimos negativos??

function sumaPuntos(){
  puntuacion = puntuacion + puntosPorAcierto;
}

function restaPuntos(){
  puntuacion = puntuacion - penalizacionPorFallo;
}

function añadeParejasAcertadas(cartaActual, cartaAnterior){
  parejasAcertadas[parejasAcertadas.length] = cartaAnterior;
  parejasAcertadas[parejasAcertadas.length] = cartaActual;
}


//El juego continúa hasta que están todas las parejas acertadas
while (parejasAcertadas.length < cartas.length) {
  //hay que obtener la carta actual y la anterior que haya clickado
  var acierto = cartaAnterior === cartaActual;

  if (acierto) {
    añadeParejasAcertadas(cartaActual, cartaAnterior);
    sumaPuntos();
  } else {
    restaPuntos();
    voltearCartas();
  }
}


/*EJERCICIO 1
PARTE 1
Hay tres personas esperando el banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenga estos tres nombres en orden*/

var nombres=["Sofia","David","Juan"];
console.log(nombres);

/*
PARTE 2
Se agregan dos personas más al final de la fila: Sara y Augustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?
*/
nombres.push("Sara");
console.log(nombres);
nombres.push("Agustin");
console.log(nombres);
nombres.shift();
console.log(nombres);
/*PARTE 3
Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila.
Aparece una persona más (Elena) y va hasta el final de la fila. ¿Cómo es la cola?
*/
nombres.splice(1,0,"Renata")
console.log(nombres)
nombres.push("Elena");
console.log(nombres)

/*Ejercicio 2
Escriba un programa de JavaScript para construir el siguiente patrón, usando un bucle for anidado.*/
var asterisco=[["*"],["*","*"],["*","*","*"],["*","*","*","*"],["*","*","*","*","*"]]
for ( var i=0;i<asterisco.length;i++){
    console.log(asterisco[i])}

/*Ejercicio #3
Escriba bucles while para hacer lo siguiente:
– Imprimir repetidamente el valor de la variable xValue, disminuyéndolo en 0.5 cada vez,
siempre que xValue siga siendo positivo.*/

var xValue=[]
var i=0
while (i<=5) {
   console.log(xValue+(i+0.5)) 
    i++
}

// Imprime todos los números impares entre 1 - 100.
var a=0
for (var i=1;i<=100;i++){
    if(i %2==1){
        a=a+1;
        console.log(`${i}`)
    }
}
console.log(`${a}`  )

/*- Escriba un método con un bucle while para imprimir del 1 al n entre corchetes.
Por ejemplo, si n = 6 imprime [1] [2] [3] [4] [5] [6]*/
var matriz=[]
var n=0
while (n<=6) {
   console.log(matriz+(n)) 
    n++
}

/*- Escriba un método con un bucle while que calcule la suma de los primeros n enteros positivos:
suma = 1 + 2 + 3 + … + norte
Ejemplos:
n = 5 suma = 15
n = 19 suma = 190*/
var b=0
for(var i=0; i<=19;i++){
    b=b+i
}
console.log(b)

    
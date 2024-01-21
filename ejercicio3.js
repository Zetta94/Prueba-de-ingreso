//Funcion que genera un arreglo de numeros impares hasta el numero ingresado.
function numerosImpares(numero){
    //Control de que el numero ingresado sea mayor que 0.
    if(numero<=0){
        return console.log('Por favor ingrese un numero mayor que 0');
    }
    //Variables de inicializacion del arreglo y otra de control.
    let arrayImpares  = [];
    let control = numero;
    //Bucle para generar el arreglo solo con los numeros impares.
    for(let i = 1;i<=control;i++){
        if(numero % 2 !== 0) arrayImpares.unshift(numero);
        numero--;
    }
    //Muestro los resultados por consola.
    console.log(arrayImpares);
    //Devuelvo el arreglo.
    return arrayImpares;
}
//Llamo a la funcion.
numerosImpares(10);
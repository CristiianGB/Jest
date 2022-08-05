// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar)=>{
    let valueInYen = (valueInDollar/1.2)*127.9
    return valueInYen
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = (valueInYen/127.9)*0.8;
    return valueInPound
}
console.log(fromEuroToDollar(10))
console.log(fromDollarToYen(10))
console.log(fromYenToPound(10))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
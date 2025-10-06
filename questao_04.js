function  Convertertemperatura(grau)
let entrada = prompt("Temperatura em °C:");{
entrada = entrada.replace(',', '.');

}
let celsius = parseFloat(entrada);
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(`Temperatura em °F: ${fahrenheit.toFixed(0)}`);
console.log(`Temperatura em K: ${kelvin.toFixed(2).replace('.', ',')}`);
alert(`Temperatura em °F: ${fahrenheit.toFixed(0)}\nTemperatura em K: ${kelvin.toFixed(2).replace('.', ',')}`);

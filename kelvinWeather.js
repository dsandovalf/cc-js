// The variable kelvin stores the forcast for today in Kelvins
const kelvin = 293;

//The line below shows that to get celsius subtract 273 from Kelvin 
const celsius = kelvin - 273;

//The line below is to convert celsius to fahrenheit 
let fahrenheit = celsius * (9 / 5) + 32;

//The line below rounds down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//The line below is to convert celsius to newton 
let newton = celsius * (33 / 100);

//The line below rounds down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)
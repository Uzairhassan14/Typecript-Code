"use strict";
// Q :45
function createCar(manufacturer, model, ...args) {
    const car = { manufacturer, model };
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyota", "Corolla", "color", ["sunroof", "backup camera"]);
console.log(myCar);

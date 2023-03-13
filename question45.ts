// Q :45

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // allow for arbitrary additional properties
  }
  
  function createCar(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = { manufacturer, model };
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      car[key] = value;
    }
    return car;
  }
  
  const myCar = createCar("Toyota", "Corolla", "color", ["sunroof", "backup camera"]);
  console.log(myCar); 

const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Supra",
      year: 2022,
      color: "White"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2018,
      color: "Red"
    },
    {
      id: 3,
      make: "Ford",
      model: "Focus",
      year: 2005,
      color: "Blue"
    },
    {
      id: 4,
      make: "Opel",
      model: "Astra",
      year: 2003,
      color: "Silver"
    },
    {
      id: 5,
      make: "Toyota",
      model: "Aygo",
      year: 2015,
      color: "Purple"
    }
  ];
  

exports.getCars = () => {
    return cars;
};

exports.getCarInformation = (id) => {
    let foundCar = null;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            foundCar = cars[i];
            break;
        }
    }

    if (foundCar) {
        const { make, model, year, color } = foundCar;
        return `Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}.`;
    } else {
        return "Car doesn't exist";
    }
};

exports.getCarAge = (id) => {
    let foundCar = null;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            foundCar = cars[i];
            break;
        }
    }

    if (foundCar) {
        const currentYear = 2024;
        const carAge = currentYear - foundCar.year;
        return `Car is ${carAge} years old.`
    } else {
        return "Car doesn't exist";
    }
        
    
};

//super class Vehicle
class Vehicle {
    constructor(vehicleID, vehicleName, manufacturer) {
        this.vehicleID = vehicleID;
        this.vehicleName = vehicleName;
        this.manufacturer = manufacturer;
    }

}
//child class of Vehicle
class Car extends Vehicle {
    constructor(vehicleID, vehicleName, manufacturer, carType) {
        super(vehicleID, vehicleName, manufacturer);
        this.carType = carType;
    }
}
//child class of Vehicle
class Aeroplane extends Vehicle {
    constructor(vehicleID, vehicleName, manufacturer, planeType) {
        super(vehicleID, vehicleName, manufacturer);
        this.planeType = planeType;
    }
}
//super class Employee
class Employee {
    constructor(employeeID, employeeName, birthDate) {
        this.employeeID = employeeID;
        this.employeeName = employeeName;
        this.birthDate = new Date(birthDate).toLocaleDateString();
    }
}
//child class of Employee
class Driver extends Employee{
    constructor(employeeID, employeeName, birthDate, driversLicense) {
        super(employeeID, employeeName, birthDate);
        this.driversLicense = driversLicense;
    }
}
//child class of Employee
class Pilot extends Employee{
    constructor(employeeID, employeeName, birthDate, pilotsLicense) {
        super(employeeID, employeeName, birthDate);
        this.pilotsLicense = pilotsLicense;
    }
}
//Reserve class, to compare and hold result of checking compatibility
class Reserve {
    constructor(reservationDate, employeeID, vehicleID) {
        this.reservationDate = reservationDate;
        this.employeeID = employeeID;
        this.vehicleID = vehicleID;
    }
}
//Car array of objects
let cars = [
    new Car(901, 'e-tron 55', 'Audi', 'all-electric'),
    new Car(902, 'Model S', 'Tesla', 'all-electric'),
    new Car(903, 'Corolla', 'Toyota', 'Gas')
]
//Aeroplane array of objects
let planes = [
    new Aeroplane(101, 'Airbus A380', 'Airbus', 'wide-body aircraft'),
    new Aeroplane(102, 'Boeing 787 Dreamliner', 'Boeing Commercial Airplanes', 'wide-body jet airliner')
]
//Driver array of objects
let drivers = [
    new Driver(2191, 'Ahmed', '1998, 02, 25', 1001),
    new Driver(2192, 'Fahad', '1996, 11, 07', 1002),
    new Driver(2193, 'Nawaf', '1998, 12, 17', 1003)
]
//Pilot array of objects
let pilots = [
    new Pilot(2101, 'Aseel', '1997, 05, 11', 6001),
    new Pilot(2102, 'Rens', '1994, 12, 26', 6002)
]
//checking compatibility driver with car, pilot with aeroplane
let checkCompatibility = (employeeID, vehicleID) => {

    let res = []; //holds an array of the new object

    //check if employee is a driver and vehicle is a car -> returns current date and IDs
    if ((drivers.find(drivers => drivers.employeeID == employeeID)) && cars.find((cars => cars.vehicleID == vehicleID))){
        res.push(new Reserve(new Date().toLocaleDateString(), employeeID, vehicleID))
        res.forEach(entry => console.log(entry));
        return "OK! Driver & Car"
    }

    //if employee is a driver and vehicle is an aeroplane -> reutrns not compatible.
    else if ((drivers.find(drivers => drivers.employeeID == employeeID)) && planes.find((planes => planes.vehicleID == vehicleID))){
        return "Not compatible. Driver and Aeroplane"
    }

    //if employee is a pilot and vehicle is an aeroplane -> returns current date and IDs
    else if ((pilots.find(pilots => pilots.employeeID == employeeID)) && planes.find((planes => planes.vehicleID == vehicleID))){
        res.push(new Reserve(new Date().toLocaleDateString(), employeeID, vehicleID))
        res.forEach(entry => console.log(entry));
        return "OK! Pilot & Aeroplane"
    }

    //if employee is a pilot and vehicle is a car -> returns not compatible
    else if ((pilots.find(pilots => pilots.employeeID == employeeID)) && cars.find((cars => cars.vehicleID == vehicleID))){
        return "Not compatible. Pilot and Car"
    }

    //!driver || !pilot || !car || !aeroplane
    else {
        return "wot?"
    }
}

//test -> enter employeeID and vehicleID
console.log(checkCompatibility(2191, 901));
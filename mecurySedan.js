const VehicleModule = require('./vehicle').Vehicle

class car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage)
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
    }

   checkService() {
    if(this.mileage > 30000) {
       this.scheduledService = true;
        }
    }

    start(){
        if(this.fuel > 0){
            return this.started = true;
        } else {
            return this.started = false;
        }
    }
    loadPassanger(num) {
        if(this.passenger + num <= this.maxPassengers) {
            this.passenger += num;
            return this.passenger;
        } else {
            return "Too many passengers";
        }
    }


}

let myCar = new car("BMW", "X5 45e", 2023, "Green", 2300);
myCar.scheduleService();
myCar.start();
myCar.loadPassanger(3);
console.log(myCar);
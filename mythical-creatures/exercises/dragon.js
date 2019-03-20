class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.timesEatenCounter = 0;
  }
  eat(){
    this.timesEatenCounter += 1;
    if (this.timesEatenCounter > 2 ){
      this.hungry = false;
    }
  }
}

module.exports = Dragon;

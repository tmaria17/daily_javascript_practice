class Wizard {
  constructor(attributes){
    this.name = attributes.name;
    this.isRested = true
    this.castCounter = 0
    this.bearded = attributes.bearded

    if (attributes.bearded == undefined){
      this.bearded = true;
    }
  }
  incantation(string){
    return string.toUpperCase();
  }

  castSpell(string){
    this.castCounter += 1;
    if (this.castCounter < 3){
    return 'MAGIC BULLET';
    }
    else {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }

  }
}

module.exports = Wizard;

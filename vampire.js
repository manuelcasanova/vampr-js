class Vampire {

  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVampAway = 0;
    let thisVampire = this;

    // it loops up until it finds the creator
    while(thisVampire.creator) {
      thisVampire = thisVampire.creator;
      numOfVampAway ++;
    }
    return numOfVampAway;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let thisVampire = this.numberOfVampiresFromOriginal;
    vampire = vampire.numberOfVampiresFromOriginal;

    if (thisVampire < vampire) {
      return true;
    }
    else {
      return false;
    }
}

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (this === vampire){
      return this
    }
    let senior;
    let junior;
    if(this.isMoreSeniorThan(vampire)){
      senior = this
      junior = vampire
    } else {
      junior = this
      senior = vampire
    }
    
    if(senior.isDirectAncestor(junior)){
      return senior
    } else {
      return senior.creator.closestCommonAncestor(junior)
    }
  }

  isDirectAncestor(vampire) {
    if(this.offspring.includes(vampire)) {
      return true;
    } else {
      for (let v of this.offspring){
        if(v.isDirectAncestor(vampire)){
          return true
        }
      }
    }
    return false
  }
}

module.exports = Vampire;


const dogFactory = (_name, _breed, _weight) => {
    return {
      _name, 
      _breed, 
      _weight,
      get name() {
        return this._name;
      },
      set name(name) {
        this._name = name; 
      },
      get breed() {
        return this._breed;
      },
      set breed(breed) {
        this._breed = breed; 
      },
      get weight() {
        return this._weight;
      },
      set weight(weight) {
        this._weight = weight; 
      },
      bark() {
        return `ruff! ruff!`
      },
      eatTooManyTreats() {
        return this._weight ++
      }
    }
  };
// MAKE A PERSON
// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
//
// The methods that take an argument must accept only one argument and it has to be a strings
var Person = function(firstAndLast) {
  var array = firstAndLast.split(" ");
  this.getFirstName = function() {
    return array[0];
  };

  this.getLastName = function() {
    return array[1];
  };

  this.getFullName = function() {
    return array[0] + " " + array[1];
  };

  this.setFirstName = function(first) {
    array[0] = first;
  };

  this.setLastName = function(last) {
    array[1] = last;
  }

  this.setFullName = function(firstAndLast) {
    var temp = firstAndLast.split(" ");
    this.setFirstName(temp[0]);
    this.setLastName(temp[1]);
  }
};

var bob = new Person("Bob Ross");
// sets bob's full name to "First Last"
bob.setFullName("First Last");
// reutrns 'First Last'
bob.getFullName();

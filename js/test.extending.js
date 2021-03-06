////////////////////////////////////
//Functions extending constructors//
////////////////////////////////////
//I know properties were not necessary to pass the test, but added them as practice.
//
//                Vehicle
//                   |
//     ---------------------------
//     |             |            |
//   Land V.       Aircr.        SeaV.
//   |    |          |            |
//  Car Train      Plane         Boat                    

function Vehicle() {
  this.isMachine = true;
  this.travel = function() {
    return "Good Bye";
  }
}
function LandVehicle() {
  Vehicle.call(this);
  this.onLand = true;
}
LandVehicle.prototype = Object.create(Vehicle.prototype);

function Car() {
  LandVehicle.call(this);
  this.onRoads = true;
}
Car.prototype = Object.create(LandVehicle.prototype);

function Train() {
  LandVehicle.call(this);
  this.onRails = true;
}
Train.prototype = Object.create(LandVehicle.prototype);

function Aircraft() {
  Vehicle.call(this);
  this.flies = true;
}
Aircraft.prototype = Object.create(Vehicle.prototype);

function Plane() {
  Aircraft.call(this);
  this.hasPropeller = true;
  this.takeOff = function() {
    return "Safe Travels!";
  }
}
Plane.prototype = Object.create(Aircraft.prototype);

function SeaVessel() {
  Vehicle.call(this);
  this.inWater = true;
  this.setSail = function() {
    return "Ahoy!";
  }
}
SeaVessel.prototype = Object.create(Vehicle.prototype);

function Boat() {
  SeaVessel.call(this);
  this.hasOars = true;
  this.depart = function() {
    return "Anchors Aweigh!";
  }
}
Boat.prototype = Object.create(SeaVessel.prototype);

///////////////////////////////
//Functions extending objects//
///////////////////////////////

var extendee = {color: "ecru", make: "BMW", model: "328i"};
var extended = _.extend({}, extendee)

//page is equal to 1, unless another page is passed.
function params(options) {
  
  var implicit = {page: 1};

  var thisPage = _.extend({}, implicit, options)
  return thisPage;
}













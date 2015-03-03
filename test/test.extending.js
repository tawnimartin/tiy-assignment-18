// Ensure functions are defined

("Vehicle"      in window) || (window["Vehicle"]      = function Vehicle(){});
("LandVehicle"  in window) || (window["LandVehicle"]  = function LandVehicle(){});
("Car"          in window) || (window["Car"]          = function Car(){});
("Train"        in window) || (window["Train"]        = function Train(){});
("SeaVessel"    in window) || (window["SeaVessel"]    = function SeaVessel(){});
("Boat"         in window) || (window["Boat"]         = function Boat(){});
("Aircraft"     in window) || (window["Aircraft"]     = function Aircraft(){});
("Plane"        in window) || (window["Plane"]        = function Plane(){});
("params"       in window) || (window["params"]       = function params(){ return {}; });

// Ensure objects are defined

("extended" in window) || (window["extended"] = {foo: "bar"});
("extendee" in window) || (window["extendee"] = {fut: "bol"});

describe("Extending Constructors", function() {

  it("is polymorphic", function(){

    var plane = new Plane();
    var boat  = new Boat();
    var car   = new Car();
    var train = new Train();

    expect(plane).to.be.instanceof(Plane);
    expect(plane).to.be.instanceof(Aircraft);
    expect(plane).to.not.be.instanceof(SeaVessel);
    expect(boat).to.be.instanceof(SeaVessel);
    expect(boat).to.not.be.instanceof(LandVehicle);
    expect(car).to.be.instanceof(Car);
    expect(car).to.be.instanceof(LandVehicle);
    expect(car).to.not.be.instanceof(Aircraft);
    expect(train).to.be.instanceof(LandVehicle);
    expect(train).to.be.instanceof(Vehicle);

  });

});

describe("Extending Objects With _.extend", function() {

  it("should give all the keys from the extendee to the extended", function() {

    // If we have an object called extendee, and we
    // extend it to create a new object called extended

    var expectation = expect(extended).to.have.all
    expectation.keys.apply(expectation, _.keys(extendee));

  });

  it("can be used for creating defaults", function() {

    var implicit = params({});
    var explicit = params({page: 2});

    expect(implicit.page).to.eq(1);
    expect(explicit.page).to.eq(2);

  });

});
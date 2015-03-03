TERNARY

conditional ? iftrue : false

var value = true ? "foo" : "bar";
var value = false? "foo" : "bar";
page = page? page:1;

if page is a value (thruthy) set to page 1

if this condition is true, return the first value, otherwise return the second value

////////

_.each(repoData, function(myRepo){
	renderRepo(myRepo)
});

SHORTER VERSION of the above:

_.each(repoData, renderRepo);

///////

in js everything is a descendent of something else.. evertying is an object.

function Organism() {
	this.living = true;

}

function Plant() {
	Organism.call(this);
	//its a constructor but also a function. 
	//here we're setting the this with the context of the plant
}

Plant.prototype = Object.create(Organism.prototype);//creates a new object from this prototype

p = new Plant
p
//plant is living
p instanceof Plant
//true
p instanceof Organism
//true
function Mineral();
var m = new Minderal()
m
Mineral
m = instanceof Organism
//false


Create animal

function Animal() {
	Organism.call(this)  // extending the parent
	this.breathesAir = true;
}
Animal is related to oranism
//taking the pt of the org and applying it to the animal
Animal.prototype = Oject.create...

function Vertebrae() {
	Animal.call(this);  //will also have living
	this.hasSpine = true;
}
Vertebrae.prototpye = Object.create(Animal.protoype);
var jackel //living, breashe air and ahs spine
is instance of vert
instance of animal 
instance of organisim
not instance of plant


Organism
----|----------
|             |
Plant         Animal
              |
              Vertebrae
              //the vertebra will inherit all the above - animal and org // the call(this)

is __ an instance of the class __? if so, I can do these things.
school and students/principle
when you're extending to enhance someting
but don't change the original functionality / signature - where it returns something different.
polymorphism - if something's expecting a schoolperson, and princ is a schoolperson, that can operate on both.




////
EXTENDING OBJECTS	(not constructors)
with _.extend


_.extend - 

_.extend
keeps it's own properties, but also adds the othe properties
will override the props that are already there
var a = {foo: "bar"}
var b = {spam: "ham"}

_.extend(b, a)
b will be spam ham & foo bar
copy from source to dest and returns THE DESTINATION object

we want to set c to b extending a, but we dont want to alter b
 you can pass multiple sources
 the star is a splat - one param or mult param

 var c = _.extend{}
 start with an empty new obj
 a foo bar
 b spam ham
 var c = _.extend({}, a,b)
 a is unchanged
 b is unchanged
 c is a copy extended of both


 

 var objs array
 contains a and b
 we want to create a var d that extends 
make empty extend 
_.extend.apply(_, objs);

call the extend function
set this property to the underscore
give it an array of the values you want to call
we want to call it with a and b
apply takes an arg
use objs as an array

//Object {foo:bar, spam: ham}



normally, you call extend with params
_.extend(param, param)
		|
function.apply(_, [objs])<--- specify an array of parameters// each obj in the array as separate and indiv parameters

you have an array and you need to pass it as parameters into a function - basically what its used for.

//

var a {foo: "bar", name: "curly"}
var b {spam: "ham", name: "moe"}

_.extend({}, a b)
foo: bar, name: curly, foo: bar
will overwrite same property
-use: use extend to create mixins...  we can use it to create default properties

//


function takesOptions {
	
	//makes an ajax call to an api.. i want you to filter by this, page to be this, this to be that.
	//you can give these options to the function
	//say page num is required and you don't give me page num
	//if else...etc - could do.. or you ocuold use extend to do that too...

	var detaults = {
	name: "foo",
	cool: true
	};
	//when you pass extend it will put them together and you'll still have your defaults.

	var opts = _.extend({}, defaults, options)//we havef all the options user gave us but als def
	return opts;
}
takesOptions({});
//name foo, cool true
takesOptions({name: "class"})
name class cool true
takesOoptions({name: "jd", cool: false})
// jd cool false
takesOptions(name jd, cool: false, also: jk)



////
BACKBONE	

for each
.filter
_underscore
native dom 
jquery uses native dom
constructors - to create a structured app
bb - gives you a lot of the same tools to do all that.
gives you a basic backbone that you can use to start from

backbone.events

dom events - like event listeners
all native dom events are based on user interaction
click
hover
submits form 
dom events
bb adds events as something that objects can do
you can have a cat or dog constructor 
and it can fire events on its own
this obj is listening for events from this object
make diff parts of your app communicate with itself by broadcasting events and listening for that


//
events - mixed into other objects
create your own const. and mix in events 
expose a few diff methods


on  // this.on  // on something that has bb events mixed in.

object.on("say" callback function [,context])  <--specify what the event is going to be just like you would with jq..exact name, yiou can name it whatever you want. 
callback function - what you want to do when the event happens.  Most likely an anonymousfunction.  So you can't use "this" on it... app = this.  here you can spec the context of what this is going to be... at this point, this refers to your app.  Inside it refers to this and it will be 
optional third param - this is not an array - it just means it's optional... context is optional

bb it can call your object and set the context.
bb is doing that for you.. hey call it with this context.
just set a context
in an anonymous func this points to window

App {

object.on("say") {

	this.doSomething();

}, this);

}

replaces that = this.

//
object.on(ev cb, ) context defaults to object.  usually what you want is no context.  this points to whatever you put .on on.


//
object.off - stop listening to the event.  turn the listener off. takes the same params, but they are all optional.

ex.

dog.on "bark", function(), context of something else

dog.on "bark", function(), no context

dog.on "bark", a different function to run

dog.on "walk", a completely different function

4 event listeners on the dog.  call with xontext 1
same with dog context
call another function agaian
call walk

if you just want to turn off the first ev list
dog.off "bark", same function(), same context

the other event listeners will still be listening.

if you want to turn of both listeners you would do the same thing but not specify the context
it will do it for all contexts.
dog. off "bark", same function() (no context)

if you want to turn off all events for jsut bark
dog.off ("bark")
stop listening for the bark event

dog.off to stop listening to all events -- turn off all it's events.

done with dog completely - call off. stop listening for events
//

how do events get broadcasted?

trigger
dog.trigger("bark");
anything that's listening for the bark event will run
one req. for trigger - the event you're triggering.

obj.trigger(event[,param1][,param2][, ..]) - optionally set as many parameters as you want - they get passed to the listener.  

If we have a person. You're listening for when they talk.
person.on("talk", function(message) {
	alert(message)
});

when they trigger the talk event, pass the message along.

person.trigger("talk", "hello")

//

ONCE

Instead of on...

person.once

sets up the event listener, but automatically turns it off after one occurrance.  Only listen to the event once and will stop listening.

//

Usually when you say.on you're inside something else, like App.... example... person.on("talk", cb) - usually you want the callback to be the context of the app.  So you want it on the app itself.

App {
	this.listento(person, talk, cb)<--give it the obj you're listening to , the event, the callback
	now instead of the cb being the context of the person, the cb is the context of the .... App?
}
 listen to is also listen once.
 after fires once, it turns it off.



 //
 3 people playing marco polo

 Brit
 Kim 
 Jo

 when any one triggers marco, everyone else does something with polo
 set each to listen to each other for the event marco

 get instance of bb events
 not a constructor just a mixin obj

 var brit = _.extend({}, Backbone.Events);
creating an empty object and mixing in bb events


brit.on
brit.trigger

brit now has these methods.  

brit.listenTo(tim, "marco", function() {
	console.log("brit says polo");
})
listens to tim when he says marco, she will say polo

tim.trigger("marco")
//brit says polo

jo.listenTo(tim, "marco", function() {
	console.log("jo says polo");
})
//now jo says polo too

tim.trigger("marco");


tim.callout = function() {
	console.log("time says marco");
	this.trigger("marco");
}// this instead of tim here cause it's on tim callout

tim.callout()
//time says marco
//brit says polo
//jo says polo



jo.listenTo(brit, "marco", function() {
	
	console.log("jo says polo");
})
tim.listenTo(brit, "marco", function() {
	
})
brit.trigger("marco");
jao says polo
tim says polo

brit.listenTo jo maro function {console.log brit says polo}
tim.listenTo jo marco function {console.log tim says polo}

//

make this simpler

like have a mediator

have a pool - you have jack, matt, jesse, sam
jacks it and they're all listening.
use the pool as a mediator
when jack says marco - he's saying it to everyone in the pool
when they hear, they all say polo

create a constructor for swimmer that will mixin bb events

var Swimmer = function(name, pool) {
	
	//give swimmer name and pool

	_.extend(this, Backbone.Events);
	//"this" is the swimmer, that instance
}


var swimmer = new Swimmer()
swimmer.on
swimmer.trigger

the constructor does not have these methods, just the instance


now tell swimmer to listen to the pool



var Swimmer = function(name, pool) {
	
_.extend(this, Backbone.Events);
	this.listenTo(pool, "marco", function(who) {
	if(who != name) {
	console.log(name, "says POLO");
		}
	});
	this.callout = function() {
		console.log(name, "says MARCO");
		pool.trigger("marco", name);
	}
}

we don't want swimmer to call event on itself so we don't want swimmer to also yell out polo...
so we want to specif who yelled out
//to run..

var pool = _.extend({}, Backbone.Events);
var jack = new Swimmer("jack", pool);
var matt = "
var jesse = "
var sam = "

jack.callout()
//j says marco
//matt says polo
//jess polo
//sam polo

etc.

they're all listening to eachother but we only have one event happening.  so everyone's listening to the call

























































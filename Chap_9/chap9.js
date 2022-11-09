/* ---------------------- */
function F(){}
console.log(F.prototype)

F.prototype.prop = 'prototype value'
var obj = new F()
console.log(obj.prop)

obj.prop = 'instance value'
console.log(obj.prop)
/* ---------------------- */


/* ---------------------- */
function Circle(center, radius){
    this.center = center;
    this.radius = radius;
}

Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius
}

var c1 = new Circle({x:0, y:0}, 2.0)
var c2 = new Circle({x:0, y:1}, 3.0)
var c3 = new Circle({x:1, y:0}, 1.0)
console.log('넓이 = ' + c1.area())
/* ---------------------- */


/* ---------------------- */
var objA = {
    name : 'Tom',
    sayHello : function(){
        console.log('Hello! ' + this.name)
    }
}

var objB = {
    name : 'Huck'
}

objB.__proto__ = objA
var objC = {}
objC.__proto__ = objB
objC.sayHello()
/* ---------------------- */


/* ---------------------- */
obj_t = new F()
console.log(F.prototype.constructor)
console.log(obj_t.constructor)

function F(){}
console.log(F.prototype.__proto__)

function F(){}
var obj_3 = new F()

console.log(obj_3 instanceof F)
console.log(obj_3 instanceof Object)
console.log(obj_3 instanceof Date)
/* ---------------------- */


/* ---------------------- */
var person = {
    _name: 'Tom',
    get name(){
        return this._name
    },
    set name(value){
        var str = value.charAt(0).toUpperCase()+value.substring(1)
        this._name = str
    }
};
console.log(person.name)
person.name = 'huck'
console.log(person.name)

var point = {
    x : 1.0,
    y : 1.0,
    get r(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    get theta() {
        return Math.atan2(this.y, this.x)
    },
    set polar(pc){
        this.x = pc.r*Math.cos(pc.theta)
        this.y = pc.r*Math.sin(pc.theta)
    }
}
console.log(point.r)
console.log(point.theta)
point.polar = {r : 2, theta : Math.PI/4}
console.log(point)

var obj = {}
Object.defineProperty(obj, 'name',{
    value : 'Scott',
    writable : true,
    enumerable : false,
    configurable : true
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(obj.name)

var person = {
    name : 'Nike',
    age : 17,
    sayHi : function(){
        console.log('Hi' + this.name)
    }
}
Object.defineProperty(person, 'sayHi', {enumerable : false})
for(var i in person){
    console.log(i)
}
// console.log(square(2))
// function square(x){
//     return x*x
// }

// var square_2 = function(x){
//     return x*x
// }
// console.log(square_2(2))

// var square_3 = new Function('x', 'return x*x')
// console.log(square_3(2))

// var square_4 = x => x*x
// console.log(square_4(2))


/* 예제 8-1 */
function norm(x){
    var sum2 = sumSquare()
    return Math.sqrt(sum2)
    function sumSquare(){
        sum = 0
        for(var i = 0; i < x.length; i++){
            sum += (x[i]*x[i])
        }
        return sum
    }
}
var a = [2,1,3,5,7]
var n = norm(a)
console.log('예제 8-1')
console.log(n)


/* 예제 8-2 */
function myConcat(separator){
    var s = ''
    for(var i = 1; i < arguments.length; i++){
        s += arguments[i]
        if(i<arguments.length-1){
            s += separator
        }
    }
    return s
}
console.log('예제 8-2')
console.log(myConcat('/', 'apple', 'orange', 'peach'))


/* 예제 8-3 */
function fact(n){
    if (n <= 1){
        return 1
    }
    return n*fact(n-1)
}
console.log('예제 8-3')
fact(5)


function multiply(a,b){
    b= b||1
    return a*b
}
console.log(multiply(2,3))
console.log(multiply(2))



var tom = {
    name : 'Tom',
    sayHello : function(){
        console.log('Hello' + this.name)
    }
}
tom.sayHello()

var huck = {name : 'Huck'}
huck.sayHello = tom.sayHello
huck.sayHello()

var a = 'A'
function f(){
    var b = 'B'
    function g(){
        var c = 'C'
        console.log(a+b+c)
    }
    g()
}
f()

/* 예제 8-6 */
function makeCounter(){
    var count = 0
    return f
    function f(){
        return count++
    }
}
var counter = makeCounter()
console.log('예제 8-6')
console.log(counter())
console.log(counter())
console.log(counter())




/* 예제 8-8 */
function Person(name, age){
    var _name = name
    var _age = age
    return {
        getName : function() {return _name},
        getAge : function() {return _age},
        setAge : function(x) {_age = x}
    }
}
var person = Person('Tom', 18)
console.log(person.getName())
console.log(person.getAge())
person.setAge(19)
console.log(person.getAge())


/* 예제 8-8 */
function makeMultiplier(x){
    return function(y){
        return x*y
    }
}
var multi2 = makeMultiplier(2)
var multi10 = makeMultiplier(10)
console.log('예제 8-8')
console.log(multi2(3))
console.log(multi10(3))


var myApp = myApp || {}
myApp.test = 'test123'
console.log(myApp.test)


/* 예제 8-12 */

var Module = Module || {};

(function(_Module) {
    var name = "NoName"

    function getName(){
        return name
    }

    _Module.showName = function(){
        console.log(getName())
    }

    _Module.setName = function(x){
        name = x
    }
})(Module);
// Module.setName('TOM')
Module.showName()
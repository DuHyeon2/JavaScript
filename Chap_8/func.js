console.log(square(2))
function square(x){
    return x*x
}

var square_2 = function(x){
    return x*x
}
console.log(square_2(2))

var square_3 = new Function('x', 'return x*x')
console.log(square_3(2))

var square_4 = x => x*x
console.log(square_4(2))

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
console.log(n)

function multiply(a,b){
    b= b||1
    return a*b
}
console.log(multiply(2,3))
console.log(multiply(2))

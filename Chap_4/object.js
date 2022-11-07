// var card = {
//     suit: '하트',
//     rank: 'A'
// };
// console.log(card);

// console.log(card.suit);
// console.log(card['rank']);

// // delete card.rank;
// // console.log(card);

// console.log('suit' in card);

// console.log('toString' in card);

// var a = card
// console.log(a.suit)
// a.suit = '스페이드'
// console.log(a.suit)
// console.log(card.suit)

// function square(x){
//     return x*x
// }
// console.log(square(3))


// function dist(p,q){
//     var dx = q.x - p.x
//     var dy = q.y - p.y
//     return Math.sqrt(dx*dx+dy*dy)
// }
// var p1 = {x:1, y:1}
// var p2 = {x:4, y:5}
// var d = dist(p1,p2)
// console.log(d)


// function add1(x) {
//     return x = x+1
// }

// var a = 3
// var b = add1(a)
// console.log('a = ' + a + ', b = ' + b)



// function add2(p) {
//     p.x = p.x +1
//     p.y = p.y +1
//     return p
// }
// var a = {x:3, y:4}
// var b = add2(a)
// console.log(a, b)


// var a = 'global'
// function f(){
//     var a = 'local'
//     console.log(a)
//     return a
// }
// f()
// console.log(a)

var a = 'global'
function f2() {
    console.log(a)
    var a = 'local'
    console.log(a)
    return a
}
f2()


#!/usr/bin/env node

var sym1 = Symbol()
var sym2 = Symbol()
console.log(sym1 == sym2)

var HEART = Symbol('심장')
console.log(HEART.toString())

var sym_club1 = Symbol.for('club')
var sym_club2 = Symbol.for('club')
console.log(sym_club1 == sym_club2)

var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`)
var now = new Date()
console.log(`오늘은 ${now.getMonth()+1} 월 ${now.getDate()} 일 입니다.`)
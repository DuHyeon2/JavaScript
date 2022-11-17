function Person(name){
    Object.defineProperty(this, 'name', {
        get : function(){
            return name;
        },
        set : function(newName){
            name = newName;
        },
        enumerable : true,
        configurable : true
    });
}

Person.prototype.sayName = function(){
    console.log(this.name);
};

const person = new Person('Du');
console.log(person.name)
person.name = 'Hyun'
console.log(person.name)
person.sayName()
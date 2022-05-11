// 继承

function Father(name) {
  this.name = name;
  this.other = [1,2,3];
}

Father.prototype.fatherFn = function() {
  console.log(this.name, 'fatherFn', this.other);
}

function Son(name, sex) {
  Father.call(this, name);
  this.sex = sex;
}

Son.prototype.sonFn = function() {
  console.log('son', this.sex)
}

Son.prototype.__proto__ = Father.prototype;
// or 
// const pp = Object.create(Father.prototype);
// Son.prototype = pp;
// Son.prototype.constructor = Son;


const s1 = new Son('Tom', 'man');

console.log(s1);

s1.sonFn();


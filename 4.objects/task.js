function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
  this.marks = [mark]; 
  } else {
  this.marks.push(mark); 
  }
}

Student.prototype.addMarks = function(...rest) {
  if ( this.marks === undefined) {
  this.marks = [...rest]; 
  } else {
  this.marks.push(...rest); 
  }
}

Student.prototype.getAverage = function (marks) {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let average = (sum/this.marks.length).toFixed(2);
  return avg = Number(average);;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMarks(2, 3, 5);
student2.addMark(3);
student2.exclude('low grades')
console.log(student2);
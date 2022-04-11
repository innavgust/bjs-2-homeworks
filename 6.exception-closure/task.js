//задача 1

function parseCount(num) {
  let count = Number.parseInt(num);
  if (isNaN(count)) {
    const countError = new Error("Невалидное значение");
    throw countError;
  }
  return count;
}

function validateCount(num) {
  try {
    let finalCount = parseCount(num);
    return finalCount;
  }catch(e) {
    console.log('Ошибка произошла!');
  }
}

let res = validateCount(5);
console.log (res);
//задача 2

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
      this.firstSide = firstSide;
      this.secondSide = secondSide;
      this.thirdSide = thirdSide;
      if ((firstSide + secondSide <= thirdSide) || (firstSide + thirdSide <= secondSide) || (secondSide + thirdSide <= firstSide)) {
        const triangleError = new Error("Треугольник с такими сторонами не существует");
        throw triangleError;
      }
    }
  
    getPerimeter() {
      return (this.firstSide + this.secondSide + this.thirdSide);
    }
  
    getArea() {
      let p = (this.firstSide + this.secondSide + this.thirdSide) / 2;
      let area = Math.sqrt(p*(p - this.firstSide)*(p - this.secondSide)*(p - this.thirdSide));
      return Number(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    let triangle1 = new Triangle(a, b, c);
    try {
      return {firstSide: firstSide, secondSide: secondSide, thirdSide: thirdSide};
    }catch(e) {
      console.log('Ошибка! Треугольник не существует!');
    }
  }
  
  let result = getTriangle(2, 5, 5);
  console.log (result);
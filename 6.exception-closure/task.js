//задача 1

function parseCount(num) {
  let count = Number.parseInt(num);
  if (isNaN(count)) {
    throw new Error("Невалидное значение");
  } else {
    return count;
  }
}

function validateCount(num) {
  try {
    let finalCount = parseCount(num);
    return finalCount;
  } catch(e) {
    console.log(e.message);
  }
}

let res = validateCount();
console.log(res);

console.log();
//задача 2

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
    if ((firstSide + secondSide <= thirdSide) || (firstSide + thirdSide <= secondSide) || (secondSide + thirdSide <= firstSide)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return (this.firstSide + this.secondSide + this.thirdSide);
  }

  getArea() {
    let p = (this.getPerimeter()) / 2;
    let area = Math.sqrt(p*(p - this.firstSide)*(p - this.secondSide)*(p - this.thirdSide));
    return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    let triangle1 = new Triangle(a, b, c);
    return triangle1;
  }catch(err) {
    console.log('Ошибка! Треугольник не существует');
  }
}

let result = getTriangle(11, 5, 4);
console.log (result);
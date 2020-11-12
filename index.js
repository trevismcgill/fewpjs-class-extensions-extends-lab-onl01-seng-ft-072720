// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
        console.log('constructor', array)
    }
        get countSides() {
            console.log('countSides', this.sides.length)
            return this.sides.length
        }

        get perimeter() {
            let perim = this.sides.reduce(function(accumulator, element) {
                return accumulator + element
            }, 0)
            console.log('perim', perim)
            return perim
        }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}


class Square extends Polygon {
    get isValid() {
        return this.perimeter / 4 === this.sides[0] ? true : false
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}
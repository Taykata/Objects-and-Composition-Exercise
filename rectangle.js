function rectangle(width, height, color) {

    width = Number(width);
    height = Number(height);

    let arr = color.split('');
    let letter = arr.shift().toUpperCase();
    color = letter + arr.join('');

    return obj = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
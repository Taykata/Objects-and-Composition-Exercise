function carFactory(obj) {

    let result = {};
    result.model = obj.model;
    let engine = {};
    let carriage = {};
    carriage.type = obj.carriage;
    carriage.color = obj.color;

    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (obj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize -= 1;
    }

    let wheels = [];

    for (let i = 1; i <= 4; i++) {
        wheels.push(obj.wheelsize);
    }

    result.engine = engine;
    result.carriage = carriage;
    result.wheels = wheels;

    return result;

}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
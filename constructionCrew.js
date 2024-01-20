function constructionCrew(obj) {

    let neededWater = 0.1 * obj.weight * obj.experience;

    if (obj.dizziness === true) {
        obj.levelOfHydrated += neededWater;
        obj.dizziness = false;
    }

    return obj;
}

console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));
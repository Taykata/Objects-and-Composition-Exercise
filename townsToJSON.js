function townsToJSON(arr) {

    let [headerTown, headerLatitude, headerLongitude] = arr.shift().split('|').map(x => x.trim()).filter(x => !!x);

    let result = [];

    for (let info of arr) {
        let [town, latitude, longitude] = info.split('|').map(x => x.trim()).filter(x => !!x);
        latitude = Number(latitude);
        longitude = Number(longitude);

        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);

        latitude = Number(latitude);
        longitude = Number(longitude);

        let obj = {
            [headerTown]: town,
            [headerLatitude]: latitude,
            [headerLongitude]: longitude
        };
        result.push(obj);
    }

    console.log(JSON.stringify(result));

}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
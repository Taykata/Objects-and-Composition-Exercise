function lowestPricesInCities(arr) {

    let result = {};

    for (let tokens of arr) {
        let [town, product, price] = tokens.split(' | ');
        price = Number(price);

        if (product in result) {
            if (result[product].price > price) {
                result[product] = {
                    price,
                    town
                }
            }
        } else {
            result[product] = {
                price,
                town
            }
        }
    }

    let entries = Object.entries(result);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }

}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
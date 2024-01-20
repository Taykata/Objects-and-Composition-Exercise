function storeCatalogue(arr) {

    let catalogue = {};

    for (let tokens of arr) {
        let [product, price] = tokens.split(' : ');
        price = Number(price);

        catalogue[product] = price;
    }

    let entries = Object.entries(catalogue);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    let currLetter = null;
    
    for (let arr of sorted) {
        let firstLetter = arr[0][0];
        
        if (firstLetter !== currLetter) {
            console.log(firstLetter);
            currLetter = firstLetter;
            console.log(`  ${arr[0]}: ${arr[1]}`);
            let empty = sorted.unshift();
        } else {
            console.log(`  ${arr[0]}: ${arr[1]}`);
            let empty = sorted.unshift();
        }

    }

}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
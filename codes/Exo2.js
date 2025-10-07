export function findOdd(array) {
    let count = {};

    for (let i = 0; i < array.length; i++) {
        if (count[array[i]]) {
            count[array[i]]++;
        } else {
            count[array[i]] = 1;
        }
    }
    for (let number in count) {
        if (count[number] % 2 !== 0) {
            return parseInt(number);
        }
    };
    if (array.length === 0) {
        return 0;
    }
}


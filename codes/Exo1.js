function capitalizeNames(names) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 0) {
            names[i] = names[i][0].toUpperCase() + names[i].slice(1);
        }else{
            names[i] = names[i];
        }
        
        if (names[i] == names[i].toUpperCase()) {
            names[i] = names[i].toLowerCase();
        }
    }
    return names;
}
console.log(capitalizeNames(['alice', 'bob', 'charlie'])); /* ['Alice', 'Bob', 'Charlie']*/
console.log(capitalizeNames(['ALICE', 'BOB', 'CHARLIE'])); /* ['alice', 'bob', 'charlie']*/

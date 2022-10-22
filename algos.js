const arrayDiff = (array, arr2) => {
    return array.filter(el => el !== arr2[0])
}

console.log(arrayDiff([1,2,2,2,2,2,4,5], [2]))
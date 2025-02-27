function findMissing(list) {
    let a = list[0];
    let l = list[list.length - 1];
    let n = list.length;
    let sum = 0;

    let totalSum = (n + 1) * (a + l) / 2;
    for (let i = 0; i < n; i++) {
        sum += list[i];
    }

    return totalSum - sum;
}
console.log(findMissing())
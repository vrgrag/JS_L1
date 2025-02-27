function primeFactors(number) {
    let divisor = 2;
    let exponent;
    let result = "";

    while (number !== 1) {
        exponent = 0;
        while (number % divisor === 0) {
            number /= divisor;
            exponent += 1;
        }
        if (exponent !== 0) {
            if (exponent !== 1) {
                result += `(${divisor}**${exponent})`;
            } else {
                result += `(${divisor})`;
            }
        }
        divisor += 1;
    }

    return result;
}

function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
    }
    let phoneNumber = "(" + numbers[0] + numbers[1] + numbers[2] + ") " +
                      numbers[3] + numbers[4] + numbers[5] + "-" +
                      numbers[6] + numbers[7] + numbers[8] + numbers[9];

    return phoneNumber;
}

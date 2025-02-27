function solution(str) {
    let stroka = str.split('');
    let result = [];

    for (let i = 0; i < stroka.length; i = i + 2) {
        if (stroka[i + 1]) {
            result.push(stroka[i] + stroka[i + 1]);
        } else {
            result.push(stroka[i] + '_');
        }
    }

    return result;
}

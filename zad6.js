function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
              result.push(
  str.slice(0, i).toLowerCase() +
     str[i].toUpperCase() +
                  str.slice(i + 1).toLowerCase());
  }
      }
  return result;
  }
  
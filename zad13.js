function longest(arr, n) {
let arrIndex = arr.map((word, index) => [index, word]);
arrIndex.sort((a, b) => {
    if (b[1].length === a[1].length) {
      return a[0] - b[0];
    }
    return b[1].length - a[1].length;
  });

  let arrSort = arrIndex.map(para => para[1]);

  return arrSort[n - 1];
  }
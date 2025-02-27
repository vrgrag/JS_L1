function wave(str) {
    let waveArr = [];

    for (let i = 0; i < str.length; i++) {

      let bukva = str[i];

      if (bukva === " ") {
        continue;
      } else {
        let newStroka = str.slice(0, i) + bukva.toUpperCase() + str.slice(i + 1);

        waveArr.push(newStroka);
      }
    }
    return waveArr;
  }
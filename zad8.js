function expandedForm(num) {
    let  = num.toString();
    let length = numStr.length;
    let expanded = [];
  
    for (let i = 0; i < length; i++) {
      let digit = numStr[i];
      if (digit !== '0') {
        expanded.push(digit + '0'.repeat(length - i - 1));
      }
    }
    
    return expanded.join(' + ');
  }
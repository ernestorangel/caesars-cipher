function rot13(str) {

  let newStr = '';

  for (let i = 0; i < str.length; i++) {

    let charCode = str[i].charCodeAt();

    if ((charCode <= 90) && (charCode >= 65)) {

      let newCharCode = charCode - 13;

      if (newCharCode < 65) {

        newCharCode = 90 - (64 - newCharCode)

      };

      newStr = newStr + String.fromCharCode(newCharCode);
      
    } else {

      newStr = newStr + str[i];

    };
    
  };

  return newStr;

};

rot13("SERR PBQR PNZC");
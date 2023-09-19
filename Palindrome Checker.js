function palindrome(str) {
var one = str.split("");
var onePointFive = one;
for (let i = 0; i < onePointFive.length; i++) {
  if (onePointFive[i] == "")
  {
    delete onePointFive[i];

  }
  else if (onePointFive[i] == " ")
  {
    delete onePointFive[i];

  }
  else if (onePointFive[i] == "_")
  {
    delete onePointFive[i];

  }
  else if(onePointFive[i] == "-")
  {
    delete onePointFive[i];
  }
    else if(onePointFive[i] == ".")
  {
    delete onePointFive[i];
  }
    else if(onePointFive[i] == ",")
  {
    delete onePointFive[i];
  }
    else if(onePointFive[i] == "")
  {
    delete onePointFive[i];
  }
      else if(onePointFive[i] == ")")
  {
        onePointFive[i] = "(";
  }
      else if(onePointFive[i] == "(")
  {
    onePointFive[i] = ")";
  }
}
var two = onePointFive.reverse();
var reversedStr = two.join("").toLowerCase();

//str == 
var STRoNE = str.split("");
var STRoNEtWO = STRoNE;
for (let i = 0; i < STRoNEtWO.length; i++) {
  if (STRoNEtWO[i] == "")
  {
    delete STRoNEtWO[i];

  }
  else if (STRoNEtWO[i] == " ")
  {
    delete STRoNEtWO[i];

  }
  else if (STRoNEtWO[i] == "_")
  {
    delete STRoNEtWO[i];

  }
  else if(STRoNEtWO[i] == "-")
  {
    delete STRoNEtWO[i];
  }
    else if(STRoNEtWO[i] == ".")
  {
    delete STRoNEtWO[i];
  }
    else if(STRoNEtWO[i] == ",")
  {
    delete STRoNEtWO[i];
  }
    else if(STRoNEtWO[i] == "")
  {
    delete STRoNEtWO[i];
  }
}

var correcterSTR = STRoNEtWO.join("").toLowerCase();

  return correcterSTR == reversedStr;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))
function palindrome(str) {
var SplitStrToReverse = str.split("");
var CopyToRemoveExcess = SplitStrToReverse;
for (let i = 0; i < CopyToRemoveExcess.length; i++) {
  if (CopyToRemoveExcess[i] == "")
  {
    delete CopyToRemoveExcess[i];

  }
  else if (CopyToRemoveExcess[i] == " ")
  {
    delete CopyToRemoveExcess[i];

  }
  else if (CopyToRemoveExcess[i] == "_")
  {
    delete CopyToRemoveExcess[i];

  }
  else if(CopyToRemoveExcess[i] == "-")
  {
    delete CopyToRemoveExcess[i];
  }
    else if(CopyToRemoveExcess[i] == ".")
  {
    delete CopyToRemoveExcess[i];
  }
    else if(CopyToRemoveExcess[i] == ",")
  {
    delete CopyToRemoveExcess[i];
  }
    else if(CopyToRemoveExcess[i] == "")
  {
    delete CopyToRemoveExcess[i];
  }
      else if(CopyToRemoveExcess[i] == ")")
  {
        CopyToRemoveExcess[i] = "(";
  }
      else if(CopyToRemoveExcess[i] == "(")
  {
    CopyToRemoveExcess[i] = ")";
  }
}
var ReverseArray = onePointFive.reverse();
var ReturnToString = ReverseArray.join("").toLowerCase();

//convert norma variant
var NoReverseToArray = str.split("");
var CopyNoReverse = NoReverseToArray;
for (let i = 0; i < CopyNoReverse.length; i++) {
  if (CopyNoReverse[i] == "")
  {
    delete CopyNoReverse[i];

  }
  else if (CopyNoReverse[i] == " ")
  {
    delete CopyNoReverse[i];

  }
  else if (CopyNoReverse[i] == "_")
  {
    delete CopyNoReverse[i];

  }
  else if(CopyNoReverse[i] == "-")
  {
    delete CopyNoReverse[i];
  }
    else if(CopyNoReverse[i] == ".")
  {
    delete CopyNoReverse[i];
  }
    else if(CopyNoReverse[i] == ",")
  {
    delete CopyNoReverse[i];
  }
    else if(CopyNoReverse[i] == "")
  {
    delete CopyNoReverse[i];
  }
}

var correcterSTR = CopyNoReverse.join("").toLowerCase();

  return correcterSTR == reversedStr;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))

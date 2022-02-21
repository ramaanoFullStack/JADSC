// CHALLENGE

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// ANSWER

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case 1:
    return "alpha";
    break;
  case 2:
    return "beta";
    break;
  case 3:
    return "gamma";
    break;
  case 4:
    return "delta";
    break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// Default case Challenge

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Default Case Solution

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a":
    return "apple";
    break;
  case "b":
    return "bird";
    break;
  case "c":
    return "cat";
    break;
  default:
    return "stuff";
    break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Multiple Identical Options Challenge

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Multiple Identical Options Solution

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Replacing If Else Chains with Switch

//Challenge

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//Solution

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch(val){
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
    case 7:
      return "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

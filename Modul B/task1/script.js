// 1.1 - split_reverse
function split_reverse(text) {
  let index = text.length / 2;
  let first_half = text.slice(0, index);
  let second_half = text.slice(index);
  let array1 = first_half.split("").reverse().join("");
  return array1 + second_half;
}
console.log("1.1 - split_reverse");
console.log(split_reverse("this is a text"));

// 1.2 - caps_nocaps
function caps_nocaps(text, b) {
  if (b === true) {
    return text.toUpperCase();
  } else {
    return text.toLowerCase();
  }
}

console.log("1.2 - caps_nocaps");
console.log(caps_nocaps("HeLLo WOrlD", true));
console.log(caps_nocaps("HeLLo WOrlD", false));

// 1.3 - day
function day(text) {
  let txt;
  switch (text) {
    case "Monday":
      txt = "Sunday";
      break;
    case "Tuesday":
      txt = "Monday";
      break;
    case "Wednesday":
      txt = "Tuesday";
      break;
    case "Thursday":
      txt = "Wednesday";
      break;
    case "Friday":
      txt = "Thursday";
      break;
    case "Saturday":
      txt = "Friday";
      break;
    case "Sunday":
      txt = "Saturday";
      break;
    default:
      txt = "no.";
  }
  return txt;
}

console.log("1.3 - day");
console.log(day("Monday"));

// 1.4
function sameLetter(text) {
  let lastLetter = text.length - 1;
  if (text.charAt(0) === text.charAt(lastLetter)) {
    return "yes?";
  } else {
    return "no?";
  }
}
console.log("1.4 - sameLetter");
console.log(sameLetter("testing it"));

// 1.5 - isInList
function isInList(text, list) {
  if (list.includes(text)) {
    return true;
  } else {
    return false;
  }
}

console.log("1.5 - isInList");
console.log(isInList("text", ["text", "no", "yes"]));

// 1.6 - combine
function combine(list) {
  let firstWord = list.shift();
  let lastWord = list.pop();
  return firstWord + lastWord;
}
console.log("1.6 - combine");
console.log(combine(["home", "no", "yes", "work"]));

// 1.7 - sametext
function sameText(txt1, txt2) {
  if (txt1.toLowerCase() === txt2.toLowerCase()) {
    return "They are the same";
  } else {
    return "they are not the same";
  }
}
console.log("1.7 - sameText");
console.log(sameText("this is a text", "This is a text"));

// 1.8 -including
function including(text) {
  if (text.includes("JavaScript")) {
    return text + ": contains JavaScript";
  } else {
    return "no.";
  }
}

console.log("1.8");
console.log(including("Does this text contain JavaScript or not?"));

// 1.9 - ageGroup
function ageGroup(age) {
  if (age < 13) {
    return "Barn";
  } else if (age >= 13 && age <= 19) {
    return "Tenåring";
  } else if (age >= 20 && age <= 64) {
    return "Voksen";
  } else {
    return "Pensjonist";
  }
}
console.log("1.9 - ageGroup");
console.log(ageGroup(66));

// 1.10
function vowelCheck(character){
    if(character == "a"||character == "e"||character == "i"||character == "o"||character == "u"){
        return character + " is a vowel"
    } else{
        return character + " is not a vowel"
    }
}
console.log("1.10 - vowelCheck");
console.log(vowelCheck("e"));

// 1.11 - findSeason
function findSeason(month){
    switch(month.toLowerCase()){
        case 'december':
        case 'january':
        case 'february':
            return 'winter'
            break;
        case 'march':
        case 'april':
        case 'may':
            return 'spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            return 'summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            return 'autumn';
            break;
        default:
            console.log("Invalid Month");
            break;
    }
}

console.log("1.11 - findSeason")
console.log(findSeason('march'));
console.log(findSeason('december'));

// 1.12
function slices(list){
    let newArray = list.slice(1, -1);
    return newArray;
}
console.log("1.12 - slices")
console.log(slices(["sun", "wind", "rain", "snow"]));
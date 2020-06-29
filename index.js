function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var upperCase = string.toUpperCase();
  console.log(upperCase);
}

function logWhisper(string){
  var lowerCase = string.toLowerCase();
  console.log(lowerCase);
}

function sayHiToGrandma(string){
  if(string == string.toLowerCase()){
    return "I can't hear you!";
  }
}

function sayHiToGrandma(string){
  if(string === string.toUpperCase()){
    return "YES INDEED!";
  }
}

function sayHiToGrandma(string){
  if(string === 'I love you, Grandma.'){
    return "I love you, too."
  }
}
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  
  if(katzDeliLine.length){
    var now;
    now = katzDeliLine.shift();
    return `Currently serving ${now}.`;
    
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length){
    for(var i = 0; i< katzDeliLine.length; i++){
      return `The line is currently: katzDeliLine[i]`;
    }
  }else{
    return "The line is currently empty.";
  }
}
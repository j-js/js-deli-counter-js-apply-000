var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  
  if(katzDeliLine.length){
    var now;
    now = katzDeliLine.shift();
    console.log(now);
    return now;
    
  }else{
    return "There is nobody waiting to be served!";
  }
}
var counter = 0;

function takeANumber(katzDeliLine){
  katzDeliLine.push(++counter);
  return `Welcome you are number ${counter}`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (var i=0; i<(katzDeliLine.length - 1); i++){
      line += `${i+1}. ${katzDeliLine[i]}, `;
    } 
    line += `${katzDeliLine.length}. ${katzDeliLine[(katzDeliLine.length) - 1]}`
    return line
  }
}
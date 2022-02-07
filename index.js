



function superbowlWin(record){
  const found = record.find(function (element){
      return element.result === "W"
  });
  if (found){
    return found.year
  }
  return found
  
} 




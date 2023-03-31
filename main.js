function wave(str){
  if(str === []){
    return [];
  }
    var result = [];
    
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      
      if (char.match(/[a-z]/i)) {
        var upper = str.slice(0, i) + char.toUpperCase() + str.slice(i + 1);
        result.push(upper);
      }
    }
    
    return result;
  
}
console.log(wave('happy'))
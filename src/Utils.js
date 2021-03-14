

export function modCalc(score){
  var mod = Math.floor((parseInt(score) - 10)/2)
  if (mod>=0){
    return "+" + mod;
  }
  else{
    return mod;
  }
}

console.log($.grep([1,2,3], function(value){
  return value % 2 === 0;
})); // [2]
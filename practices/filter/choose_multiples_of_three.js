'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  return collection.filter(isNumberMultiplesOfThree);

  }
let isNumberMultiplesOfThree=number=>{
  return number%3==0;
}

module.exports = choose_multiples_of_three;

//1
 let greatestOfTwo  = (int1, int2) => {
  console.log ((int1 > int2) ? int1 : int2);
}

//2
let greatestOfThree = (int1, int2, int3) => {
 console.log((int1 < int2 && int3 < int2) ? int2 : ((int1 < int3 && int2 < int3) ? int3 : int1));
}

//3
let greatestOfFour = (int1, int2, int3, int4) =>{
  console.log((int1 < int2 && int3 < int2 && int4 <int2) ? int2 : ((int1 < int3 && int2 < int3 && int4 < int3) ? int3 : (int1 < int4 && int2 < int4 && int3 < int4) ? int4 : int1));
}


//4
let leastOfFour = (int1, int2, int3, int4) =>{
  console.log((int1 > int2 && int3 > int2 && int4 > int2) ? int2 : ((int1 > int3 && int2 > int3 && int4 > int3) ? int3 : (int1 > int4 && int2 > int4 && int3 > int4) ? int4 : int1));
}

// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
  // Your Code Here

  const arr2 = arr1;
  arr2.splice(0, 3, 7, 7 ,7);
  return arr2;

}

console.log(result(arr1));
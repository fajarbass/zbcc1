// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const array1 = [1, 29, 88, 37, 22, '90'];

function result(array1) {
    // Your Code Here

    return res =  array1.every(arr => Number(arr) <91);

    // return array1.every((arr,i) =>
    // {
    //     console.log('array : ',i,'value : ',arr,' less than 91 ? ',Number(arr)<91);
    //     return Number(arr) < 91;
    // }); 
   
}

console.log(result(array1));
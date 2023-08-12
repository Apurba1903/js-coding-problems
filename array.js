const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student ={id: 360, class: 12, name: 'Apurba'};
const friendsAge = [20, 21, 22, 19, 18, 17, 24];

function add(num1, num2){
    return num1 + num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// To Check Array
console.log(Array.isArray(friendsAge));
console.log(typeof add);

// Check if anything is in the array or not
console.log(friendsAge.includes(29));
console.log(friendsAge.includes(21));

if(friendsAge.indexOf(288) !== -1 ){

}

// Concat = Put two array together

const newfriendsAge =[12, 15, 23, 20];

const allFriends = newfriendsAge.concat(friendsAge);
console.log(allFriends);
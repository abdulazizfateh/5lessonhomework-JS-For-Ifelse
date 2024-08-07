// TASK 1 ||||||||||||||||||||||||||||| Yozuv ichidagi sonlarni yeg'indisini chiqarish 


// let id = 'a2b9d4u6l3a5z8i7z'; // id has length of 17 and its indexes are (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
// let sum = 0;

// for (let i = 0; i < id.length; i++) {
//     if (!isNaN(id[i])) {
//         sum += Number(id[i]);
//     }
// }
// console.log(sum);


// TASK 2 ||||||||||||||||||||||||||||| Yozuvlarni aloxida raqamlarni aloxida qilish

// let id = "a2b9d4u6l3a5z8i7z"; // id has length of 17 and its indexes are (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
// let str = '';
// let num = '';

// for (let i = 0; i < id.length; i++) {
//     if (isNaN(id[i])) {
//         str += id[i];
//     } else {
//         num += id[i];
//     }
// }
// console.log(str);
// console.log(num);



// TASK 3 ||||||||||||||||||||||||||||| Yozuv ichidagi juft raqamlarni topish 

// let id = "a2b9d4u6l3a5z8i7z";
// let num = '';

// for (let i = 0; i < id.length; i++){
//     if (!isNaN(id[i])){
//         if (id[i] % 2 == 0){
//             num += id[i];
//         }
//     }
// }

// console.log(num);










// Boolean Tasks (ifga oid malalar ishlash)

// TASK 1 |||||||||||||||||||||||||||||

// let a = 111;


// if (a > 99 && a < 1000){
//     if (a % 2 != 0){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else{
//     console.log(false);
// }



// TASK 2 |||||||||||||||||||||||||||||

// let a = 300;
// let b = 100;
// let c = 300;

// if (a == b || b == c || a == c){
//     console.log(true);
// } else {
//     console.log(false);
// }


// TASK 3 |||||||||||||||||||||||||||||

// let a = -1;
// let b = 1;
// let c = 2;

// if (a === -b || b === -c || b === -c ){
//     console.log(true);
// } else {
//     console.log(false)
// }



// TASK 4 |||||||||||||||||||||||||||||

// let num = 21;

// a = num % 100;            // a = 29;
// first = (num - a) / 100;  // first = 3; 
// last = a % 10;            // last = 9;
// middle = (a - last) / 10; // middle = 2;

// if (num > 99 && num < 1000) {
//     if (first != middle && middle != last && first != last) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log(false);
// }




// TASK 5 |||||||||||||||||||||||||||||

// let num = 159;

// a = num % 100;            // a = 29;
// first = (num - a) / 100;  // first = 3; 
// last = a % 10;            // last = 9;
// middle = (a - last) / 10; // middle = 2;

// if (num > 99 && num < 1000) {
//     if (first < middle && middle < last) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log(false);
// }



// TASK 6 |||||||||||||||||||||||||||||

// let num = 841;

// a = num % 100;            // a = 29;
// first = (num - a) / 100;  // first = 3; 
// last = a % 10;            // last = 9;
// middle = (a - last) / 10; // middle = 2;

// if (num > 99 && num < 1000) {
//     if (first < middle && middle < last || first > middle && middle > last) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log(false);
// }





// TASK 7 |||||||||||||||||||||||||||||

// let num = 131;

// a = num % 100;            // a = 29;
// first = (num - a) / 100;  // first = 3; 
// last = a % 10;            // last = 9;
// middle = (a - last) / 10; // middle = 2;

// if (num > 99 && num < 1000) {
//     if (first == last) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log(false);
// }
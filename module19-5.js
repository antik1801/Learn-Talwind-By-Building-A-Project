/*

২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

*/

var myMoney = 20000;

/*
output: ajk amar mon bhalo nei - 39 times
*/

var i = 0;
while(i<39){
    // console.log("ajk amar mon bhalo nei");  
    i++;
}
i=58;
while(i <=98){
    // console.log(i);
    i++;
}
// console.log(i);

for(i=412; i<456 ; i++)
{
    if(i%2===0){

        // console.log(i);
    }
}





/*
Suppose you want to create a shopping cart where it will calculate the total price of the products added. Implement a function totalCost that will take an array of objects where each object will have two properties: name and price. The function totalCost will take the array of objects as a parameter and return the total price of the products added to the shopping cart.

Test Cases:
Case 1: totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ])
Output: 1000

Case 2: totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}])
Output: 13000

*/

const totalCost = (products) => {
    var sum = 0;
    for(var i =0 ; i< products.length; i++){
        sum += products[i].price;
    }
    return sum;
};

var array = [{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]

// console.log(totalCost(array));
/*
This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?
Input:
The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got) .
Output:
Print the name of the topper. 
Sample Input-1:
84  99  77 
Sample Output-1:
Dela

*/

// function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
//     return 
//     }
// console.log(JimOrDelaOrChinku(84 ,99 ,77 ))


/*
Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.
 If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’.
for example the input array will be like 
Case 1: 
Input:
﻿[
  {
   fname:'John',
  },'fname'
﻿]
Output:
"YES"
﻿
Case 2: 
Input:
﻿[
  {
   lastName:'Mithila',
  },'fname'
﻿]
Output:
"NO"
*/

const deleteProperty =(arr)=>{
    // Write your code here.
    }

    var array = [
        {
         fname:'John',
        },'fname'
      ]
// console.log(deleteProperty())


/*
Objective
In this challenge, we learn about switch statements.
Task
Complete the getLetter(s) function in the editor. It has one parameter: a string, 
, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
If the first character in string s is in the set {a , e, i, o, u} then return A.
If the first character in string s is in the set {b , c, d, f, g} then return B.
If the first character in string s is in the set {h , j , k, l, m} then return C.
If the first character in string s is in the set {n , p , q , r , s , t , v , w , x , y , z} then return D.
Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
Function Description
Complete the getLetter function in the editor .
getLetter has the following parameters:
string s: a string
Returns
string: a single letter determined as described above
Input Format
A single string denoting s .
Constraints
1<=|s|<=100, where |s| is the length of s.
String s contains lowercase English alphabetic letters (i.e., a through z) only.
Sample Input 0
adfgt
Sample Output 0
A
*/



function getLetter(s) {
    let letter;
    letter = s;
    var array = letter.split("");
    
    // switch(array[0]=(a||e||i||o||u) || array[0]=(b||c||d||f||g){
    //     case 1:
    //         letter = "A";
    //         break;
    //     case 2:
    //         if{
    //             letter = "B";
    //         }
    //         break;
    //     case 3:
    //         if(h||j||k||l||m){
    //         letter = "C";
    //         }
    //         break;
    //     default:
    //         letter = "D"

    // }
    return letter;
}
// getLetter("aeiou");

// console.log(getLetter("aeiou")) ;


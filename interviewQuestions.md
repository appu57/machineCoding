Interview Questions
https://leetcode.com/discuss/interview-experience/2072679/livspace-interview-questions-front-end-sde-1-my-journery-from-76lpa-to-27-lpa
1. Implement React Context.
2. Create a Data Structure for covid cases in state showing the state and no.of cases now show states in reverse alphabetical order.
Now for the same array return second Highest case no. in state.
3. Find values for (x^2 - x) < 0.
4. You are given a 5L jug and a 3L jug. How would you get 4L in a jug? You are given an unlimited supply of water.
5. What would you do if you have a project and you have to deliver it as best as possible?
6. What does call, apply, bind do?
7. If you have a function with params and you want to get the params in an array what should you do ?
8. Write a duplicate function(Polyfill using Prototype)
[1,2].duplicate(); // Should return [1,2,1,2]

9. Write a polyfill of map function.
10. Write a polyfill of filter function.
11. Implement this in Javascript
"$("button").addClass("change").css("background-color","yellow")"
12. Implement this in Javascript
Print 100 buttons with nos. and click any button to alert the number. Hint : Use the concept of event bubbling/capturing to implement this.
13. Remove duplicates from array using ES6
14. Implement function to read field inside a nested object. (Very imp asked many times)
const obj = {
  A: {
    B: {
      C: {
        D: {
          E: 2,
        },
      },
    },
  },
};

console.log(read(obj, "A.B.C.D.E"));
// return 2 as answer if E exists else return undefined
16. Write a method sum which gives the following output sum(2)(3).
17. Five HTTP response code used for
18. When to use PUT and POST in REST Services
19. What is the result of 3 + 2 + "7".
20. Output of following

(function(){    
  var a = b = 3;  
})();   
console.log("a defined? " + (typeof a !== 'undefined'));  // false
console.log("b defined? " + (typeof b !== 'undefined')); // true
Output of following
const KEY = 'white_rabbit';   
if (true) {   
  const KEY = 'ginger_rabbit';   
}   
console.log(KEY); // white_rabbit
21. What is the output of the following
let x = 42;   
if (true) {   
  console.log(x);   
  let x = 1337;   
}
22. How would you prevent multiple actions on the same event.
23. Have you ever received a maximum call size exceeding error? How did you resolve it?
24. List css positions?
25. List some pseudo classes and pseudo elements.
26. Write a small code snippet to write a functional component which has some state in it.
28. List some features of ES6? what do you know about arrow functions
29. What will be the color of the text below?
 <div id =”test”>
  <span> Text </span>
</div>

div#test span { color: green; }
div span { color: blue; }
span { color: red; }
30. What is throttling and debounce in Javascript.
31. Create a circle in html.
32. What is a pure component in react?
33. How to center a div in css (Mention different ways)
34. What is errorBoundary in React?
35. What is Box Model in css?
36. Explain Hoisting in Javascript.
37. How do you lower the load time of your page in Javascript?
38. Explain async await in JavaScript.
39. What is prototype inheritance?
40. What is the output of this?
41. Write a function for input function.
input(obj,'key1', 'key2', 'key3'); // 10

42. What is the output of this?
test1.js file contains:
var a = 20;
alert(a);
alert(b);

test2.js file contains 
alert(a);
var b = 20;
43. What would be output if test1 is included before test2.js.
44. How to define list-style-type in css?
45. What would be the output of the following?
var a = 5;
var b = '5';
if (a == b)
console.log('equal');
else console.log('not equal'); // equal
46. What would be the output of the following?
console.log([5, 7, 7, 5, 9].reduce((a, b) => a + b, 5)); //33 + 5 = 38
47. What would be the output of the following?
const items = new Set();
items.add('ball');
items.add('bat').add('shoes').add('gloves');
console.log(items.has('bat'));
items.delete('gloves');
for(const x of items){
   console.log(x);
}
console.log(items.size());
items.clear();
console.log(items.size());
48. You are given a kanban board with Backlog, ToDo, Ongoing and Done stages of a task. You are also given a text box in which we can add the selected task. If the task is in the backlog we can only move the task forward using the forward button until it reaches the done stage.Once it reaches done stage the forward button is disabled. If the task is in the done stage the forward button is disabled and the move backward button is enabled.
The Tasks are passed into the board Component in the following format
{1:[task1, task2],
2:[task3, task4],}
49. 
Write a generator function in Javascript to print all prime nos.
JSON.parse() and JSON.stringify() in JavaScript
50. Solve the following question.
// Print values of a 
const arr =[{a:1,b:2},{a:1,c:3}];
51. What would happen when you try to find values of b?
52. Why is useMemo used?
53. Calculate Sum of n numbers using closures sum(1)()(2)......
54. Application of closures.
55. Find MinMax from the array.
56. Which function in js decodes the search string?


57. How setTimeout works/ event Loop?
58. Why are keys used in React?
59. Explain closures.
60. Explain the peculiar magic of flexbox and auto margin.
61. Why does this happen in Js for the following snippet:
const Emp ={
 name:"Ya",
 company: "Ret"
}

const me = Object.create(Emp);
me.task = "Java";
delete me.company;// still shows the company name
console.log("uuu",me);

Output:
uuu {task: 'Java'} task: "Java"[[Prototype]]: Object company: "Ret"name: "Ya"[[Prototype]]: Object
62. What are the 3 different types to create an object in JavaScript?
63. What is the difference between async and defer in javascript?
64. Explain critical rendering path.
65. Explain local storage and session storage.
66. What is the output of following setTimeout calls?

setTimeout(()=>console.log("b"), 5000);
setTimeout(()=>console.log("a"),0);
setTimeout(()=>console.log("i"));
console.log("yo");
// Prints yo, a ,i, b
67. Implement in Javascript to populate template object from data object.

// Populate template from data
let data = {
    name: {
        first: "Ashish",
        last: "Garg",
    },
    age: 18,
    dob: "09/03/xxx",
};

let template = {
    name: {
        first: "",
        middle: "",
        last: "",
    },
    age: 0,
    arr: [{a: "1", c: "2"}, 2, 3]
};
Can you store passwords in local storage?
69. Explain what are JWT Tokens and how are they used?

70. Why CORS? Why the error on the client side if CORS is allowed?

71. Explain semantic tags in HTML.

72. Difference between HTML5 and HTML?

73. What does !DOCTYPE do

74. What would happen for this if you only have this one div

div:before {
  font-size:12px;
  color: #000;
  background: red;
  width :50px;
  height: 50px;
  border-radius: 50px;
}
75. Why react instead of Javascript.
76. Explain Virtual Dom.
77. Explain React Lifecycle methods.
78. What is Use Ref in React explained with example.
79. What would be the output of the following

console.log(false == '0'); // true
console.log(true === '1'); // false
80. What would be the order of the following children?

// HTML
<div class ='parent'>
  <div class = 'child-1'>
    ABC
  </div>
  <div class = 'child-2'>
    EFG
  </div>
  <div class = 'child-2'>
    OFD
  </div>
</div>

// CSS
.parent{
  display: flex;
}
.child-1{
  flex: 0 0 30;
}
.child-2{
  flex: 0 0 40;
  float: left;
}
.child-3{
  flex: 0 0 30;
}
What would be the output of the following?
var arr1 = 'john'.split('');
var arr2 = arr1.reverse();
var arr3 = 'jones'.split('');
arr2.push(arr3);
console.log('array 1:length = '+ arr1.length + ' last = '+ arr1.slice(-1));
// Ans- array 1:length = 5 last= j,o,n,e,s

82. Write a media query to change background to red for these devices 1024px and 768px
83. Why Redux? Is Redux synchronous or asynchronous?
84. Difference between ES6 and ES5 in Js
85. What is inline and inline block in css?
86. What is a span tag.
87. Explain react hooks.
90. Explain what happens when you type google.com (IP resolution)
91. Explain difference between inline and inline-block
92. What is Micro Front-end
93. What is server side rendering
94. How can you write CSS better
95. Decode a2c4e2 to aaccccee in js
97. Make a file explorer in react using a json file.
98. Flatten an object in js

99 Write a function which returns a
flattened POJO (object) when given a nested POJO.

E.g. Input: 
person: {
   name: "Aditya",
   age: 14,
 },
 info: {
   medical: {
     bloodGroup: "A+",
   },
   pets: {
     dog: "bruno",
   },
 },
};

Output:
 {
   'person.name': 'Aditya',
   'person.age': 14,
   'info.medical.bloodGroup': 'A+',
   'info.pets.dog': 'bruno'
 }

Hint: Using a recursive approach might help
How do you optimize performance in React?
When would you use redux and context API
Solve //Example input: 3, ‘ABCDEF’
//Output: [“AB”, “CD”, “EF”]
//Example input: 3, ‘0123456789’
//Output: [“0123”, “4567”, “89”]
Wiggle Sort 1
Max length of Subarray given a target value
Implement 3* 4 fluid layout with sidebar
Elements are stacked horizontally and vertically.
Elements should have equal spacing 
Elements should be in scrollable layout
It should be responsive
Sidebar will stay fixed on the left.
In the snippet below print in the given order with a delay of 2000 ms. (Asked Frequently Very Important Hint: Use Async/Await with setTimeout)
main(){
 console.log(1)
 sleep();
 console.log(2)
}
Draw concentric circles using css
Given 100 objects remove a specific key and print object without manipulating original obj
Print numbers from 10 to 1 in reverse order in one sec(use set timeout)
Move zeros to left of arr
Can we use useRef to store state as well. If not, why is that so?
What would happen if css files took 500ms to render and called first. And the js file is called which again takes 20ms to run and the rest of the html data is rendered at last?
Design the nested comment user interface.
Output of the following
var x = 1;
var output = (function() {
delete x;
return x;
})();
Polyfill for promise.all, reduce, bind.
Some more videos that you could refer for questions
(These are super helpful & very important)

https://www.youtube.com/watch?v=abbdJ4Yfm54



https://www.youtube.com/watch?v=vxggZffOqek



Not only these videos some of his videos about functions, map, filter and reduce and let,var and const are super helpful


Some of repeated DSA problems.
1. Capitalize first letter of each word in a sentence without using string methods (Use Prototype to implement this i.e s.capitialize1()).
2. Wiggle Sort 1
3. Move Zeros to Left/ Right(Repeated Many Times)
4. Binary Search
5. 3 Sum
6. Group Anagrams(Repeated many times)
7. Longest subarray sum.


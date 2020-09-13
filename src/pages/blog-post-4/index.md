---
title: Blog Post 3
date: "2020-09-012T22:40:32.169Z"
---

Recursion

Recursion is a function that calls itself until it doesn't anymore. We can set a base case for when it will stop so it doesn't get stuck in an infinite loop. This is a simple recursive function that returns the sum.  

function sum(num) {
    if (num == 0) return 0
    return num + sum(--num)
}

console.log(sum(10)) // 55

The function is a sum of given number (10) to 0. 10+9+8+7+6+5+4+3+2+1 = 55

Scope

Scope refers to the area where a variable is accessible. The two types of scope are global and local. Take this for example.

let number = 5 //accesible in the global scope

function myFunction() {
    let newNumber = 6 //accesible within the scope of myFunction
    console.log(number)
}

This is important becuase if you tried to use the variable newNumber outside of the myFunction scope it would return and error becuase it doesn't know what you are referring to.

Closure

Closure refers to a function defined within another function. The second function has access to the scope of the function that contains it. It is "enclosed" in it. 

function outer() {
  var a = 5;
  function inner() {
    var b = 5
    console.log(a + b);
  }
  inner();    
}

outer(); 

The inner function has access to the outer function scope and can use the variable a.

Spread Operator

The spread operator can be used in places where zero or more arguments are expected. For example let say we have defined a function to find the sum.

function sum(a, b, c, d) {
    return a + b + c +d
}

But say we have an array instead of values a, b, c, and d. We can use the spread operator(...)

arr = [1, 2, 3, 4]
console.log(sum(...arr)) //10 

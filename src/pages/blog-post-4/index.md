---
title: Blog Post 3
date: "2020-09-012T22:40:32.169Z"
---

Recursion

Recursion is a function that calls itself until it doesn't anymore. We can set a base case for when it will stop so it doesn't get stuck in an infinite loop. A simple recursive funtion could count down from a given number. 

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

Spread Operator



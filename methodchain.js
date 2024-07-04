// Method chaining = calling one method after another 
//                    in one continous line of code.

let username = prompt("Enter your username");

// -------- No Method Chaining-------



// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrChars = username.slice(1);
// extrChars = extrChars.toLowerCase();
// username = letter + extrChars;

// console.log(username);

// ------Method chaining ------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
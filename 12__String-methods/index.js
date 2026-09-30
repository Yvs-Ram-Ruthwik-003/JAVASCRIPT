// String methods = allow you to manipute and work with text(strings)

let userNmae = "Ruthwik   ";

console.log(userNmae.charAt(0));    //letter at index 0
console.log(userNmae.indexOf("u"));  //index of first occurance
console.log(userNmae.length);
console.log(userNmae.trim());       //to unneccesary spaces before and after the word
console.log(userNmae.toUpperCase);
console.log(userNmae.toLowerCase);
console.log(userNmae.repeat(3));
console.log(userNmae.startsWith('R'));
console.log(userNmae.endsWith(" "));
console.log(userNmae.includes("0"));
console.log(userNmae.replaceAll("R","Hr"));
console.log(userNmae.padStart(15,"0"));
console.log(userNmae.padEnd(20,"0"));

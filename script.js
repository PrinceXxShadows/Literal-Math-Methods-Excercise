let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

console.log(warmHugs.toUpperCase());

console.log(warmHugs.replace("like", "love"));
warmHugs = warmHugs.replace("like", "love");

let beenImpaled = "Oh look at that. I've been impaled.";
beenImpaled = beenImpaled.slice(-18);
console.log(beenImpaled);

let dotDotDot = "..."; 

let skullBones= `I dont have a skull ${dotDotDot} or bones`;

console.log(Math.PI);

let randomNum = Math.random();
randomNum *= 3
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

console.log(" Let it Go!".toUpperCase().repeat(2).trim());

let reindeers = "Reindeers are better than people";

console.log(reindeers.replace(/ /g, '_'));

let squareRoot = Math.sqrt(2);
console.log(squareRoot);

let newRandomNum = Math.ceil((Math.random() * 17)+6);
console.log(newRandomNum);
// --- Part 1: Time-based Greeting ---

// 1. Ask for the user's name using prompt()
let userName = prompt("Please enter your name:");

// 2. Get the current hour
let currentHour = new Date().getHours();

// 3. Determine greeting based on the hour
if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// --- Part 2: Age and Days Lived Verification ---

// 4. Ask for the user's birth year using prompt()
let birthYear = prompt("Please enter your birth year (e.g., 2005):");

// 5. Calculate age (using 2026 as the current year)
let age = 2026 - Number(birthYear);

// 6. Calculate approximate days lived
let daysLived = age * 365;
console.log("You have lived for approximately " + daysLived + " days!");

// 7. Check if adult or minor
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
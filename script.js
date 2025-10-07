// Helper function
function showOutput(message) {
  document.getElementById("out").innerHTML = message;
}

// 1️⃣ Greet
document.getElementById("btnGreet").addEventListener("click", () => {
  const name = prompt("What’s your name?");
  if (name) showOutput(`Hello, ${name}! `);
  else showOutput("You didn’t enter a name.");
});

// 2️⃣ Time of Day
document.getElementById("btnTime").addEventListener("click", () => {
  const hour = new Date().getHours();
  let timeOfDay = "";

  if (hour < 12) timeOfDay = "morning ";
  else if (hour < 18) timeOfDay = "afternoon ";
  else timeOfDay = "evening ";

  showOutput(`Good ${timeOfDay}! The current time is ${new Date().toLocaleTimeString()}.`);
});

// 3️⃣ Random Number
document.getElementById("btnRandom").addEventListener("click", () => {
  const num = Math.floor(Math.random() * 100) + 1;
  showOutput(` Your random number is: <strong>${num}</strong>`);
});

// 4️⃣ Change Title
document.getElementById("btnTitle").addEventListener("click", () => {
  const newTitle = prompt("Enter a new page title:");
  if (newTitle) {
    document.title = newTitle;
    showOutput(` Page title changed to: "${newTitle}"`);
  }
});

// 5️⃣ Change Text Color
document.getElementById("btnColor").addEventListener("click", () => {
  const colors = ["red", "blue", "green", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("out").style.color = randomColor;
  showOutput(` Text color changed to <strong>${randomColor}</strong>`);
});

// 6️⃣ Double Number
document.getElementById("btnDouble").addEventListener("click", () => {
  const input = prompt("Enter a number to double:");
  const num = parseFloat(input);
  if (!isNaN(num)) showOutput(` Double of ${num} is <strong>${num * 2}</strong>.`);
  else showOutput(" Please enter a valid number.");
});

// 7️⃣ Clear Output
document.getElementById("btnClear").addEventListener("click", () => {
  showOutput("Output cleared. ");
  document.getElementById("out").style.color = "black";
});

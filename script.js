// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
*/
function greet() {
  const name = prompt("What is your name?")
  if (!name) {
    render("<h1>>Please fill in the prompts</h1>")
    return
  }
  render("<p>Hello, " + name + ". Hello!</p> Welcome to the site")
}

/* 
  Function 2 — averageNumbers()
*/
function averageNumbers() {
  const input = prompt("Enter a list of numbers separated by commas:")
  if (!input) {
    render("<h1>Please fill in the prompts</h1>")
    return
  }

  const nums = input.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n))
  if (nums.length === 0) {
    render("<p>No real numbers provided.</p>")
    return
  }

  const sum = nums.reduce((a, b) => a + b, 0)
  const avg = sum / nums.length
  render(`<p>Numbers: ${nums.join(", ")}</p><p>Average: ${avg.toFixed(2)}</p>`)
}

/* 
  Function 3 — timeOfDay()
*/
function timeOfDay() {
  const h = new Date().getHours()
  let msg = ''
  if (h < 12) msg = 'Good Morning!'
  else if (h < 18) msg = 'Good Afternoon!'
  else msg = 'Good Evening!'
  render(`<p>${msg}</p>`)
}

/* 
  Function 4 — randomBetween()
*/
function randomBetween() {
  const min = parseInt(prompt("Enter a minimum number:"))
  const max = parseInt(prompt("Enter a maximum number:"))

  if (isNaN(min) || isNaN(max)) {
    render("<h1>>Please fill in the prompts</h1>")
    return
  }

  if (min >= max) {
    render("<p>make sure the smaller number is first</p>")
    return
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  render(`<p>Your random number between ${min} and ${max} is: <strong>${randomNumber}</strong></p>`)
}

/* 
  Function 5 — clearOutput()
*/
function clearOutput() {
  render("<p>Output cleared.</p>")
}

/* ------------------------------------------
   Student Challenge Section 
------------------------------------------ */

// 1) Change the page title
function changeTitle() {
  const newTitle = prompt("Enter a new page title:")
  if (!newTitle) {
    render("<p>>Please fill in the prompts</p>")
    return
  }
  document.title = newTitle
  render(`<p>Page title changed to: <strong>${newTitle}</strong></p>`)
}

// 2) Cycle through text colors
let colorIndex = 0
const colors = ["red", "green", "orange", "blue", "purple"]
function cycleTextColor() {
  const out = document.getElementById('out')
  colorIndex = (colorIndex + 1) % colors.length
  out.style.color = colors[colorIndex]
  render(`<p>Text color changed to ${colors[colorIndex]}!</p>`)
}

// 3) Random background color
function randomBgColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  const out = document.getElementById('out')
  out.style.backgroundColor = randomColor
  render(`<p>Background color changed to ${randomColor}!</p>`)
}

// 4) Double a number
function doubleNumber() {
  const input = prompt("Enter a number to double:")
  const num = parseFloat(input)
  if (isNaN(num)) {
    render("<h1>>Please fill in the prompts</h1>")
    return
  }
  render(`<p>${num} doubled is ${num * 2}.</p>`)
}

/* ------------------------------------------
   Event Listeners
------------------------------------------ */
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnTitle').addEventListener('click', changeTitle)
document.getElementById('btnColor').addEventListener('click', cycleTextColor)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)
document.getElementById('btnClear').addEventListener('click', clearOutput)

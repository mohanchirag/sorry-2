// Get buttons and response elements
const dontForgiveButton = document.getElementById('dontForgive');
const forgiveButton = document.getElementById('forgive');
const responseDiv = document.getElementById('response');

// Popup elements
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');
const popupDontForgive = document.getElementById('popupDontForgive');
const popupForgive = document.getElementById('popupForgive');

// Initial prompt messages
const prompts = [
  "please maaf kardo gugli? 🥺",
  "motuuuu...maaf kardo! 😔",
  "mera pyaar motu maaf krdo ❤️",
  "jldhi maaf karo...phir 🍦 khaane jaynge",
  "Last chance... maaf karegi ya ni? 😭"
];
let promptIndex = 0;

// Handle "Don't Forgive" button click (Main Screen)
dontForgiveButton.addEventListener('click', () => {
  showPopup();
});

// Handle "Forgive" button click (Main Screen)
forgiveButton.addEventListener('click', () => {
  showForgiveness();
});

// Handle "Don't Forgive" button click (Popup)
popupDontForgive.addEventListener('click', () => {
  promptIndex++;
  if (promptIndex >= prompts.length) {
    popupMessage.textContent = "Thank you maaf karne ke liye mera baby ❤️";
    popupDontForgive.style.display = "none"; // Hide the "Don't Forgive" button
  } else {
    popupMessage.textContent = prompts[promptIndex];
  }
});

// Handle "Forgive" button click (Popup)
popupForgive.addEventListener('click', () => {
  closePopup();
  showForgiveness();
});

// Show the popup
function showPopup() {
  popup.classList.remove('hidden');
}

// Close the popup
function closePopup() {
  popup.classList.add('hidden');
}

// Show forgiveness message
function showForgiveness() {
  responseDiv.innerHTML = `
    🥳 Yay! Thankkkk you mera pookie maaf karne ke liye mera baby 💖💖💖💖💖💖
  `;
  responseDiv.style.color = '#28a745';
}

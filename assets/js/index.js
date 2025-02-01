function updateTime() {
  document.getElementById("time").textContent = new Date().toUTCString();
}
updateTime();
setInterval(updateTime, 60000);

function runTypingEffect() {
  const text = "Front-end Developer.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 80;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect());

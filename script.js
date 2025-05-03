const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("messages");

chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

sendBtn.addEventListener("click", async () => {
  const question = userInput.value.trim();
  if (!question) return;

  appendMessage("Vous", question);
  userInput.value = "";

  const answer = await getAIResponse(question);
  appendMessage("IA", answer);
});

function appendMessage(sender, text) {
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

async function getAIResponse(question) {
  // Simuler une réponse (à remplacer avec une API comme OpenAI ou autre backend réel)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Je suis encore en apprentissage mais je peux t'expliquer tout sur le livre !");
    }, 1000);
  });
}

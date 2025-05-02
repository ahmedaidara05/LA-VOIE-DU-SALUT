const chatbotBtn = document.getElementById("chatbot-button");
const chatbotBox = document.getElementById("chatbot");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

chatbotBtn.addEventListener("click", () => {
  chatbotBox.classList.toggle("hidden");
});

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const question = chatInput.value.trim();
    if (!question) return;

    appendMessage("Vous", question);
    chatInput.value = "";

    setTimeout(() => {
      const response = getBotResponse(question);
      appendMessage("IA", response);
    }, 500);
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("auteur")) return "L’auteur est Ahmed Said Aidara, un penseur sénégalais.";
  if (input.includes("sujet") || input.includes("thème")) return "Le livre aborde la foi, la spiritualité et la quête de vérité.";
  if (input.includes("titre")) return "Le titre du livre est 'La Voie du Salut'.";
  if (input.includes("acheter")) return "Vous pouvez le commander via Orange Money ou Wave.";
  
  return "Je ne suis pas sûr de comprendre, mais je vais apprendre ! 😊";
}

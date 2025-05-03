function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  }
  
  function handleKey(e) {
    if (e.key === 'Enter') {
      const input = document.getElementById('userInput');
      const userMessage = input.value;
      if (userMessage.trim() === '') return;
  
      appendToChat("Vous", userMessage);
      input.value = "";
  
      // Simuler une réponse d’IA
      setTimeout(() => {
        const fakeResponse = "Hmm... laisse-moi te répondre à propos de ça.";
        appendToChat("IA", fakeResponse);
      }, 1000);
    }
  }
  
  function appendToChat(sender, message) {
    const chatLog = document.getElementById('chatLog');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = querySelector(".chatBox");

let userMessage;

const createChatLi = (message, className) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);
    content = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">robot_2</span><p>${message}</p>`
    chatli.innerHTML = chatContent;
    return chatli;

};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage,"outgoing"));
    chatInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
};

sendChatBtn.addEventListener("click", handleChat);

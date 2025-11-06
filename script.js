const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const input = document.getElementById('user-input');
    const userMessage = input.value.trim();
    if (!userMessage) return;

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-message');
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);

    input.value = '';

    const responses = [
        'A ver joven, esa sí me la sé... pero no me ponga nervioso.',
        'Esa pregunta me la hacían en la Facultad, mire...',
        'Le explico sin tanto rollo legal: un contrato es un acuerdo de voluntades, simple y elegante.',
        'Ah, joven, esa duda me la ponen hasta en los exámenes del Ceneval.',
        'Mire, la Constitución dice que todos somos iguales... menos cuando no estudiamos Derecho 😎',
        'Para eso hay que leer el Código Civil, pero le resumo: sentido común con base legal.',
        'Joven, si no estudia, no pasa el examen de amparo, ¿eh?'
    ];

    const botDiv = document.createElement('div');
    botDiv.classList.add('bot-message');
    botDiv.textContent = responses[Math.floor(Math.random() * responses.length)];
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

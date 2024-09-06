// Toggle theme
document.addEventListener('DOMContentLoaded', function () {
    // toggle btn
    const toggleButton = document.getElementById('hidden-checkbox');
    const body = document.body;
  
    toggleButton.addEventListener('change', function () {
        body.classList.toggle('light-theme');
    });
    // typing effect
    const textArray = [
        "I am Zamurd..",
        "I am a Web Developer",
        "I love PUBG game.!",
        "I am in love with JS.."
    ];
    const typingTextElement = document.querySelector('.typing-text');
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50; 

    function type() {
        const currentText = textArray[currentTextIndex];
        
        if (isDeleting) {
            if (currentCharIndex > 0) {
                typingTextElement.textContent = currentText.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                setTimeout(type, deletingSpeed);
            } else {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % textArray.length;
                setTimeout(type, typingSpeed);
            }
        } else {
            if (currentCharIndex < currentText.length) {
                typingTextElement.textContent = currentText.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                setTimeout(type, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(type, typingSpeed + 1000);
            }
        }
    }

    type();
});
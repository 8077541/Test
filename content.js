// content.js

// Define your shortcuts and corresponding messages
const shortcuts = {
    "/hi": "Hello There",
    // Add more shortcuts and messages here
};

// Function to replace shortcuts with messages
function replaceShortcuts(text) {
    for (const shortcut in shortcuts) {
        if (text.includes(shortcut)) {
            text = text.replace(shortcut, shortcuts[shortcut]);
        }
    }
    return text;
}

// Function to handle text input events
function handleInputEvent(event) {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        const currentValue = target.value;
        const replacedValue = replaceShortcuts(currentValue);
        if (replacedValue !== currentValue) {
            target.value = replacedValue;
        }
    }
}

// Attach the input event listener to all input and textarea elements
document.addEventListener("input", handleInputEvent, true);
document.addEventListener('DOMContentLoaded', function () {
    // Toolbar functionality
    const buttons = document.querySelectorAll('.toolbar button');
    const editor = document.querySelector('.editor');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const command = button.getAttribute('data-command');
            document.execCommand(command, false, null);
        });
    });

    // Save content functionality
    document.querySelector('.save-btn').addEventListener('click', () => {
        const editorContent = editor.innerHTML;
        document.getElementById('output').innerHTML = `<h3>Saved Content:</h3><div>${editorContent}</div>`;
        localStorage.setItem('savedContent', editorContent); // Save to localStorage
    });

    // Load saved content
    const savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        editor.innerHTML = savedContent;
    }
});

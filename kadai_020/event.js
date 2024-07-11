document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn');
    const text = document.getElementById('text');
    
    button.addEventListener('click', function() {
        text.textContent = 'ボタンがクリックされました';
    });
});

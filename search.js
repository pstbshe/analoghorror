document.getElementById('search-button').addEventListener('click', function() {
    
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const blocks = document.querySelectorAll('.block'); // Для класса блок

    blocks.forEach(block => {
        const text = block.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            block.style.display = ''; //ЕСли соответствует запросу то показывает
        } else {
            block.style.display = 'none'; // Скрытие элемента если он не соответствует запросу
        }
    });
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
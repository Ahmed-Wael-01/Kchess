const plusSign = document.querySelector('.create-button');
const popup = document.getElementById('popup');
const colorOptions = document.querySelectorAll('#color-container .color-option');
const whiteOption = document.getElementById('color-white');
const blackOption = document.getElementById('color-black');
const randomOption = document.getElementById('color-random'); 

plusSign.addEventListener('click', () => {
    popup.style.display = 'block';
});

window.addEventListener('click', (event) => {
    if (event.target !== plusSign && !popup.contains(event.target)) {
        popup.style.display = 'none';
    }
});

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        if (option.classList.contains('black')) {
            blackOption.checked = true;
        } else if (option.classList.contains('white')) {
            whiteOption.checked = true;
        } else if (option.classList.contains('random')) {
            randomOption.checked = true; 

            // Generate and display random color (as before)
            const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
            const randomIndex = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomIndex]; 
            // ... (logic to update UI with the random color) ... 
        }
    });
});

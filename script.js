document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const tittleInput = document.getElementById('tittle');
        const ratingInput = document.getElementById('rating');

        const tittle = tittleInput.value;
        const rating = parseInt(ratingInput.value);

        if (tittle.length < 2) {
            alert('Tittle must have at least 2 character!')
            return;
        }

        if (isNaN(rating) || rating < 1 || rating > 10) {
            alert('Please enter a rating between 1 and 10.');
            return;
        }

        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<p>Tittle: ${tittle}</p><p>Rating: ${rating}</p><button class="remove-button">Remove</button>`;

        result.appendChild(newDiv);

        tittleInput.value = '';
        ratingInput.value = '';

        const removeButton = newDiv.querySelector('.remove-button');
        removeButton.addEventListener('click', function() {
            result.removeChild(newDiv);
        });

    });
});
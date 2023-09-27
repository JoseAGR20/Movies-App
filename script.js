document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const tittleInput = document.getElementById('tittle');
        const ratingInput = document.getElementById('rating');

        const tittle = tittleInput.value;
        const rating = ratingInput.value;

        result.innerHTML = `<p>Tittle: ${tittle}</p><p>Rating: ${rating}</p>`;
    });
});
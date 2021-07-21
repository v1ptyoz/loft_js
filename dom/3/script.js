const number = document.querySelector('#number');
const color = document.querySelector('#color');
const cards = document.querySelector('.cards');
let isEven = false;
let counter = 0;
let cardsCount = [];

render(cardsCount);

number.addEventListener('input', (e) => {
    e.preventDefault();
    if (+number.value > counter) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.textContent = number.value;
        cardsCount.push(card);
        counter++;
        render(cardsCount);
    }
    if (+number.value < counter) {
        cards.removeChild(cardsCount.pop());
        counter--;
    }
});

function render(array) {
    array.forEach(element => {
        cards.appendChild(element);
    });
}

color.addEventListener('input', (e) => {
    e.preventDefault();
    if (!isEven) {
        for (let i = 0; i < cardsCount.length; i++) {
            if (i % 2 !== 0) {
                cardsCount[i].style.background = color.value;
            } else {
                cardsCount[i].style.background = '#ffffff';
            }
        }
        isEven = !isEven;
    } else {
        for (let i = 0; i < cardsCount.length; i++) {
            if (i % 2 === 0) {
                cardsCount[i].style.background = color.value;
            } else {
                cardsCount[i].style.background = '#ffffff';
            }
        }
        isEven = !isEven;
    }
})
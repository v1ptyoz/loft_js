const content = document.querySelector('.content');
const open = document.querySelector('.open');

open.addEventListener('click', (e) => {
    e.preventDefault();
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const close = document.createElement('button');
    close.textContent = 'X';

    const p = document.createElement('p');
    p.textContent = 'Я - модальное окно!'

    modalWrapper.appendChild(modal);
    modal.appendChild(close);
    modal.appendChild(p);

    document.body.appendChild(modalWrapper);

    modalWrapper.style.display = 'flex'

    close.addEventListener('click', (e) => {
        e.preventDefault();
        modalWrapper.style.display = 'none';
    })

    modalWrapper.addEventListener('click', (e) => {
        if (e.target == modalWrapper) {
            modalWrapper.style.display = 'none';
        }
    })

})
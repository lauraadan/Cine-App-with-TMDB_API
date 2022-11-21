import { router } from './js/router.js';

const btn = document.querySelector('#btn-menu');
const menu = document.querySelector('#items-menu');

window.addEventListener('popstate', router)

document.querySelector('#form-search').addEventListener('submit', (e) => {
    e.preventDefault();
    location.hash = '#search?query=' + document.querySelector('#input-search').value;
    document.querySelector('#input-search').value = '';
})

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
})

router()
import { renderServices } from './renderServices.js';

export const filter = () => {
    const filter = document.getElementById('filter');
    const search = document.getElementById('search');

    if (filter) {

        renderServices();
    
        filter.addEventListener('click', e => {
            if (e.target.closest('.select__current')) {
                e.target.closest('.select').classList.toggle('is-active');
            }
            if (e.target.closest('.select__item')) {
                e.target.closest('.select').children[0].children[0].textContent = e.target.closest('.select__item').textContent;
                e.target.closest('.select').classList.remove('is-active');
                renderServices(e.target.closest('.select__item').textContent);
            }
        })
    
        search.addEventListener('change', e => {
            renderServices(e.target.value);
        })
    }

}

// is-active
export const modals = () => {
    const modals = document.getElementById('modals');
    const main = document.getElementById('main');

    modals && modals.addEventListener('click', (e) => {
        if (e.target.classList.contains('modals')) {
            modals.classList.add('modals_hidden');
        }
        if (e.target.classList.contains('modals__submit')) {
            modals.classList.add('modals_hidden');
        }
    });
    
    main && main.addEventListener('click', (e) => {
        if (e.target.classList.contains('slide__button') || e.target.classList.contains('hero__button')) {
            modals.classList.remove('modals_hidden');
        }
    });
}
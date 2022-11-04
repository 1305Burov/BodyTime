export const accordion = () => {
    const accordion = document.getElementById('acc-list');

    accordion && accordion.addEventListener('click', (e) => {
        e.preventDefault();
        const service = e.target.closest('.list__item');
        const btn = service.querySelector('.item__btn');

        if (btn) {
            service.classList.toggle('accordion-open');
            btn.classList.toggle('item__btn_open');
            if (service.style.maxHeight) {
                service.style.maxHeight = null;
            } else {
                service.style.maxHeight = service.scrollHeight + 'px';
            }
        }
    });
}
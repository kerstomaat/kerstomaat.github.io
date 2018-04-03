(() => {
    const wrapper = document.querySelector('.card-wrapper');
    wrapper.addEventListener('touchstart', () => {
        wrapper.classList.toggle('card-wrapper--hover');
    });
})();
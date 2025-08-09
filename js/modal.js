const modal = document.querySelector('.modal');
const modalBtn = document.getElementById("btn-get")
const CloseBtn = document.querySelector(".modal_close")
const showModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

}
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';

}

modalBtn.onclick = showModal;
CloseBtn.onclick = closeModal;
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}
const onScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        showModal();

        window.removeEventListener('scroll', onScroll);
    }
}
window.addEventListener('scroll', onScroll);

window.addEventListener("load", () => {
    setTimeout(showModal, 10000)
});
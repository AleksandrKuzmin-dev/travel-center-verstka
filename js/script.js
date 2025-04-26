function setMobileMenu(
    triggerSelector,
    modalSelector,
    modalShowSelector,
    closeSelector,
    menuLinkSelector
) {
    const trigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        body = document.querySelector('body'),
        menuLinks = modal.querySelectorAll(menuLinkSelector);

    let isOpen = false;

    const openModal = () => {
        body.style.overflow = 'hidden';
        modal.classList.add(modalShowSelector);
    };

    const closeModal = () => {
        modal.classList.remove(modalShowSelector);
        body.style.overflow = 'unset';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    });

    menuLinks.forEach((link) => {
        console.log(link);
        link.addEventListener('click', closeModal);
    });

    trigger.addEventListener('click', openModal);
    close.addEventListener('click', closeModal);
}

function setModal(triggerSelector, modalSelector, closeSelector, timerValue) {
    const trigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        body = document.querySelector('body');

    let isOpen = false;
    let timeOut = null;

    const showModal = () => {
        modal.classList.remove('none');
        isOpen = true;
        body.style.overflow = 'hidden';
        timeOut = null;
    };

    const closeModal = () => {
        modal.classList.add('none');
        isOpen = false;
        body.style.overflow = 'unset';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    if (trigger) {
        trigger.addEventListener('click', () => {
            showModal();
        });
    }

    close.addEventListener('click', () => {
        closeModal();
    });

    if (timerValue) {
        timeOut = setTimeout(() => {
            showModal();
        }, timerValue);
    }
}

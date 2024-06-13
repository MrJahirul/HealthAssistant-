document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('cross');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let counter = localStorage.getItem('counter');

    if (!counter) {
        counter = 1;
    } else {
        counter = parseInt(counter) + 1;
    }

    localStorage.setItem('counter', counter.toString());

    document.getElementById('counter').textContent = counter;
});

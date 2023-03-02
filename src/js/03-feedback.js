import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle((event) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
        email: form.email.value,
        message: form.message.value
    }));
}, 500));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
});


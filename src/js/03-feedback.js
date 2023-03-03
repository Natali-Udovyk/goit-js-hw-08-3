import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const formStateString = localStorage.getItem(LOCALSTORAGE_KEY);
if (formStateString != null) {
    const formState = JSON.parse(formStateString);
    form.email.value = formState.email;
    form.message.value = formState.message;
}

form.addEventListener("input", throttle(() => {
    const formState = {
        email: form.email.value,
        message: form.message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));
}, 500));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formState = localStorage.getItem(LOCALSTORAGE_KEY)
    console.log(JSON.parse(formState));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
});


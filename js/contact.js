import { getBaseURL } from './utils.js';

function contact() {
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('button');
        if (button) {
            button.addEventListener('click', function() {
                const baseURL = getBaseURL();
                window.location.href = `${baseURL}/contact/index.html`;
            });
        }
    });
}

export { contact };
import { getBaseURL } from './utils.js';

function header() {
    document.addEventListener('DOMContentLoaded', function() {
        const navDOM = document.querySelector('.main-nav');
        if (!navDOM) {
            console.warn('Navigation DOM element not found');
            return;
        }

        const baseURL = getBaseURL();
        const currentPath = window.location.pathname;

        const HTML = `
            <a class="nav-link" href="${baseURL}/">Home</a>
            <a class="nav-link" href="${baseURL}/about-me/">About me</a>
            <a class="nav-link" href="${baseURL}/services/">Services</a>
            <a class="nav-link" href="${baseURL}/experience/">Experience</a>
        `;
        navDOM.innerHTML = HTML;

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (new URL(link.href).pathname === currentPath) {
                link.classList.add('active');
            }

            link.addEventListener('click', function() {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
}

export { header };
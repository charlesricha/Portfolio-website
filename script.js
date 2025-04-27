document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('.close-button');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const btnHireMe = document.querySelector('.btn[href=""]'); // "Hire Me" button
    const btnPortfolio = document.querySelectorAll('.btn')[1]; // "My Portfolio" button

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.remove('hidden');
        hamburger.classList.add('hidden');
        closeButton.classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hidden');
        closeButton.classList.add('hidden');
    });

    // Dropdown toggle with improved behavior
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.querySelector('.dropdown-content').classList.remove('show');
                }
            });
            content.classList.toggle('show');
        });

        // Keyboard accessibility: toggle dropdown on Enter or Space
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });

    // Close dropdowns if clicked outside
    window.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.dropdown-content');
            if (!dropdown.contains(e.target)) {
                content.classList.remove('show');
            }
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Basic interactivity for buttons (example: alert on click)
    btnHireMe.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! Please contact me at email@example.com.');
    });

    btnPortfolio.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Check out my portfolio projects below!');
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple client-side validation
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Basic email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // On successful validation, show confirmation
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });
});

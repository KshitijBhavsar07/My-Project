// Mobile Navigation Toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Scroll Animation
function scrollAnimation() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('show-animate');
        }
    });
}

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);

// Form Submission (for feedback page)
if (document.getElementById('feedback-form')) {
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would normally send the data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your feedback!');
        this.reset();
    });
}

// Image hover effect for about section
const left2 = document.querySelector('.left2');
if (left2) {
    left2.addEventListener('mouseenter', () => {
        document.querySelector('.original-image').style.opacity = '0';
        document.querySelector('.new-image').style.opacity = '1';
    });
    
    left2.addEventListener('mouseleave', () => {
        document.querySelector('.original-image').style.opacity = '1';
        document.querySelector('.new-image').style.opacity = '0';
    });
}

// Active link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('#nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Project boxes animation
const projectBoxes = document.querySelectorAll('.box');
projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
    });
});

// Banner box button animation
const bannerBoxes = document.querySelectorAll('.bannerbox');
bannerBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const button = box.querySelector('button');
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
    });
    
    box.addEventListener('mouseleave', () => {
        const button = box.querySelector('button');
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
    });
});
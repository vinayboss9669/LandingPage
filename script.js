/**
 * Coderush Landing Page - Enhanced Animations & Interactions
 */

// DOM Elements
const loader = document.getElementById('loader');
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnIcon = document.querySelector('.btn-icon');
const btnSpinner = document.getElementById('btnSpinner');
const rocket = document.getElementById('rocket');
const introText = document.getElementById('introText');
const signupCard = document.getElementById('signupCard');
const currentYearElement = document.getElementById('currentYear');

// Stats elements
const devsCount = document.getElementById('devsCount');
const projectsCount = document.getElementById('projectsCount');
const countriesCount = document.getElementById('countriesCount');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Initialize the page
function init() {
    // Set current year in footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Set up animated stats
    setupAnimatedStats();
    
    // Set up enhanced animations
    setupAnimations();
    
    // Simulate page loading with enhanced loader
    setTimeout(() => {
        hideLoader();
        triggerContentAnimations();
    }, 2500);
    
    // Set up event listeners
    setupEventListeners();
}

// Set up animated counting stats
function setupAnimatedStats() {
    // Animate stats counting
    animateCounter(devsCount, 10000, 2000, '+');
    setTimeout(() => animateCounter(projectsCount, 5000, 2000, '+'), 300);
    setTimeout(() => animateCounter(countriesCount, 120, 2000, '+'), 600);
}

// Animate a counter from 0 to target value
function animateCounter(element, target, duration, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Set up enhanced animations
function setupAnimations() {
    // Rocket animation on hover
    if (rocket) {
        rocket.addEventListener('mouseenter', () => {
            rocket.style.animation = 'rocketLaunch 1s ease';
        });
        
        rocket.addEventListener('animationend', () => {
            rocket.style.animation = 'rocketLaunch 3s infinite';
        });
    }
    
    // Intro text animation on hover
    if (introText) {
        introText.addEventListener('mouseenter', () => {
            const lines = introText.querySelectorAll('.intro-line');
            lines.forEach((line, index) => {
                line.style.animation = 'none';
                setTimeout(() => {
                    line.style.animation = `lineAppear 0.6s ease ${index * 0.1}s`;
                }, 10);
            });
        });
    }
    
    // Card hover effect
    if (signupCard) {
        signupCard.addEventListener('mouseenter', () => {
            signupCard.style.transform = 'translateY(-10px)';
            signupCard.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.6)';
        });
        
        signupCard.addEventListener('mouseleave', () => {
            signupCard.style.transform = 'translateY(0)';
            signupCard.style.boxShadow = 'var(--box-shadow-lg)';
        });
    }
}

// Hide loader with enhanced animation
function hideLoader() {
    if (loader) {
        // Add fade out animation
        loader.style.opacity = '0';
        
        // Remove loader after animation completes
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }
}

// Trigger content animations
function triggerContentAnimations() {
    // Animate header
    const header = document.querySelector('.header');
    if (header) {
        header.style.animationPlayState = 'running';
    }
    
    // Animate headline
    const headlineContainer = document.querySelector('.headline-container');
    if (headlineContainer) {
        headlineContainer.style.animationPlayState = 'running';
    }
    
    // Animate intro
    const introContainer = document.querySelector('.intro-container');
    if (introContainer) {
        introContainer.style.animationPlayState = 'running';
    }
    
    // Animate card
    if (signupCard) {
        signupCard.style.animationPlayState = 'running';
    }
    
    // Animate stats
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsContainer.style.animationPlayState = 'running';
    }
    
    // Animate footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.animationPlayState = 'running';
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Form submission
    if (signupForm) {
        signupForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Real-time input validation with enhanced effects
    if (nameInput) {
        nameInput.addEventListener('input', () => {
            clearError(nameError);
            animateInput(nameInput, true);
        });
        
        nameInput.addEventListener('blur', () => {
            validateName();
            animateInput(nameInput, false);
        });
        
        nameInput.addEventListener('focus', () => {
            animateInput(nameInput, true);
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            clearError(emailError);
            animateInput(emailInput, true);
        });
        
        emailInput.addEventListener('blur', () => {
            validateEmail();
            animateInput(emailInput, false);
        });
        
        emailInput.addEventListener('focus', () => {
            animateInput(emailInput, true);
        });
    }
    
    // Input focus animations
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            const underline = input.parentElement.querySelector('.input-underline');
            if (underline) {
                underline.style.width = '100%';
            }
            
            const icon = input.parentElement.parentElement.querySelector('.input-icon');
            if (icon) {
                icon.style.color = 'var(--accent-cyan)';
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        input.addEventListener('blur', () => {
            const underline = input.parentElement.querySelector('.input-underline');
            if (underline && !input.value) {
                underline.style.width = '0';
            }
            
            const icon = input.parentElement.parentElement.querySelector('.input-icon');
            if (icon && !input.value) {
                icon.style.color = 'var(--text-muted)';
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// Animate input on focus/blur
function animateInput(input, isFocus) {
    const inputGroup = input.closest('.input-group');
    if (isFocus) {
        inputGroup.style.transform = 'translateY(-2px)';
    } else {
        inputGroup.style.transform = 'translateY(0)';
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Reset previous errors
    resetErrors();
    
    // Validate form
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    
    // If form is valid, simulate submission
    if (isNameValid && isEmailValid) {
        submitForm();
    }
}

// Validate name field
function validateName() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        showError(nameError, 'Please enter your name');
        shakeElement(nameInput);
        return false;
    }
    
    if (name.length < 2) {
        showError(nameError, 'Name must be at least 2 characters');
        shakeElement(nameInput);
        return false;
    }
    
    return true;
}

// Validate email field
function validateEmail() {
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError(emailError, 'Please enter your email address');
        shakeElement(emailInput);
        return false;
    }
    
    if (!emailRegex.test(email)) {
        showError(emailError, 'Please enter a valid email address');
        shakeElement(emailInput);
        return false;
    }
    
    return true;
}

// Show error message with animation
function showError(errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
        
        // Add pulse animation to error
        errorElement.style.animation = 'none';
        setTimeout(() => {
            errorElement.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
}

// Clear error message
function clearError(errorElement) {
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

// Reset all errors
function resetErrors() {
    clearError(nameError);
    clearError(emailError);
}

// Shake element animation
function shakeElement(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'shake 0.5s ease';
    }, 10);
    
    // Create keyframes for shake animation
    if (!document.getElementById('shakeKeyframes')) {
        const style = document.createElement('style');
        style.id = 'shakeKeyframes';
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Submit form (simulate API call)
function submitForm() {
    // Show loading state on button with enhanced animation
    btnText.style.opacity = '0';
    btnIcon.style.opacity = '0';
    btnSpinner.style.display = 'flex';
    submitBtn.disabled = true;
    
    // Add pulsing animation to button
    submitBtn.style.animation = 'pulse 1s infinite';
    
    // Simulate API call (2.5 seconds delay for better UX)
    setTimeout(() => {
        // Hide loading state
        btnText.style.opacity = '1';
        btnIcon.style.opacity = '1';
        btnSpinner.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.style.animation = '';
        
        // Show success message with confetti
        showSuccessMessage();
        
        // Reset form
        signupForm.reset();
        
        // Reset input underlines
        document.querySelectorAll('.input-underline').forEach(underline => {
            underline.style.width = '0';
        });
        
        // Reset input icons
        document.querySelectorAll('.input-icon').forEach(icon => {
            icon.style.color = 'var(--text-muted)';
            icon.style.transform = 'scale(1)';
        });
        
        // Hide success message after 6 seconds
        setTimeout(() => {
            hideSuccessMessage();
        }, 6000);
    }, 2500);
}

// Show success message with enhanced animation
function showSuccessMessage() {
    if (successMessage) {
        successMessage.classList.add('show');
        
        // Create confetti effect
        createConfetti();
        
        // Announce success to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.classList.add('sr-only');
        announcement.textContent = 'Form submitted successfully. Welcome to Coderush!';
        document.body.appendChild(announcement);
        
        // Remove announcement after a few seconds
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 3000);
    }
}

// Create confetti animation
function createConfetti() {
    const confettiContainer = document.querySelector('.success-confetti');
    if (!confettiContainer) return;
    
    // Clear any existing confetti
    confettiContainer.innerHTML = '';
    
    // Create confetti pieces
    const colors = ['#06b6d4', '#6366f1', '#8b5cf6', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 0.5;
        
        // Apply styles
        confetti.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: ${size < 8 ? '50%' : '2px'};
            left: ${left}%;
            top: -20px;
            opacity: 0.8;
            animation: confettiFall 1.5s ease ${animationDelay}s forwards;
            z-index: 1;
        `;
        
        confettiContainer.appendChild(confetti);
    }
    
    // Add keyframes for confetti animation if not already present
    if (!document.getElementById('confettiKeyframes')) {
        const style = document.createElement('style');
        style.id = 'confettiKeyframes';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(150px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Hide success message
function hideSuccessMessage() {
    if (successMessage) {
        successMessage.classList.remove('show');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add CSS for screen reader only class
const srOnlyCSS = document.createElement('style');
srOnlyCSS.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(srOnlyCSS);
/**
 * Contact Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    const formFields = contactForm ? contactForm.querySelectorAll('.form-control') : [];
    
    // Add form message div if not present
    if (contactForm && !document.querySelector('.form-message')) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        contactForm.appendChild(messageDiv);
    }
    
    // Form validation
    function validateForm() {
        let isValid = true;
        
        formFields.forEach(field => {
            if (field.hasAttribute('required') && !field.value.trim()) {
                markInvalid(field, '此欄位為必填');
                isValid = false;
            } else if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    markInvalid(field, '請輸入有效的電子郵件地址');
                    isValid = false;
                } else {
                    markValid(field);
                }
            } else if (field.value.trim()) {
                markValid(field);
            }
        });
        
        return isValid;
    }
    
    function markInvalid(field, message) {
        field.classList.add('is-invalid');
        
        // Add error message if not exists
        let errorDiv = field.nextElementSibling;
        if (!errorDiv || !errorDiv.classList.contains('error-message')) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#dc3545';
            errorDiv.style.fontSize = '0.85rem';
            errorDiv.style.marginTop = '5px';
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }
        
        errorDiv.textContent = message;
    }
    
    function markValid(field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        
        // Remove error message if exists
        const errorDiv = field.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.remove();
        }
    }
    
    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Simulate form submission
                const formMessage = document.querySelector('.form-message');
                const submitBtn = contactForm.querySelector('.submit-btn');
                
                // Disable button and show loading state
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '正在處理 <i class="fas fa-spinner fa-spin"></i>';
                }
                
                // Simulate server response (would be replaced with actual AJAX call)
                setTimeout(() => {
                    if (formMessage) {
                        formMessage.className = 'form-message success';
                        formMessage.textContent = '感謝您的訊息！我們將盡快回覆您。';
                        formMessage.style.display = 'block';
                    }
                    
                    // Reset form
                    contactForm.reset();
                    formFields.forEach(field => {
                        field.classList.remove('is-valid');
                    });
                    
                    // Reset button
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '送出訊息';
                    }
                    
                    // Auto hide message after 5 seconds
                    setTimeout(() => {
                        if (formMessage) {
                            formMessage.style.display = 'none';
                        }
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    // Real-time form validation
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (field.hasAttribute('required') && !field.value.trim()) {
                markInvalid(field, '此欄位為必填');
            } else if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    markInvalid(field, '請輸入有效的電子郵件地址');
                } else {
                    markValid(field);
                }
            } else if (field.value.trim()) {
                markValid(field);
            }
        });
    });
    
    // FAQ Toggle functionality
    const faqItems = document.querySelectorAll('.faq-question');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            
            // Toggle current FAQ
            parent.classList.toggle('active');
            
            // Update icon
            const icon = this.querySelector('i');
            if (parent.classList.contains('active')) {
                icon.classList.replace('fa-plus', 'fa-minus');
            } else {
                icon.classList.replace('fa-minus', 'fa-plus');
            }
            
            // Close other open FAQs (accordion behavior)
            const allFaqs = document.querySelectorAll('.faq-item');
            allFaqs.forEach(faq => {
                if (faq !== parent && faq.classList.contains('active')) {
                    faq.classList.remove('active');
                    const faqIcon = faq.querySelector('.faq-question i');
                    faqIcon.classList.replace('fa-minus', 'fa-plus');
                }
            });
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animations on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animate-on-scroll class to elements
    const addAnimationClasses = function() {
        // Contact info and form sections
        document.querySelector('.contact-info')?.classList.add('animate-on-scroll');
        document.querySelector('.contact-form')?.classList.add('animate-on-scroll');
        
        // Map container
        document.querySelector('.map-container')?.classList.add('animate-on-scroll');
        
        // FAQ items
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach((item, index) => {
            item.classList.add('animate-on-scroll');
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    };
    
    // Initialize animations
    addAnimationClasses();
    animateOnScroll(); // Run once on page load
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = mobileMenuBtn.querySelector('i');
      if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formError = document.getElementById('form-error');
  const contactFormContainer = document.getElementById('contact-form-container');
  const successMessage = document.getElementById('success-message');
  const newMessageBtn = document.getElementById('new-message-btn');
  const submitBtn = document.getElementById('submit-btn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset error message
      if (formError) {
        formError.textContent = '';
        formError.style.display = 'none';
      }
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate form
      if (!name || !email || !message) {
        if (formError) {
          formError.textContent = 'Please fill in all required fields';
          formError.style.display = 'block';
        }
        return;
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formError) {
          formError.textContent = 'Please enter a valid email address';
          formError.style.display = 'block';
        }
        return;
      }
      
      // Show loading state
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
      }
      
      // Simulate form submission (would be replaced with actual API call)
      setTimeout(function() {
        // Hide form and show success message
        if (contactFormContainer) contactFormContainer.style.display = 'none';
        if (successMessage) successMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        if (submitBtn) {
          submitBtn.innerHTML = 'Send Message';
          submitBtn.disabled = false;
        }
      }, 1500);
    });
  }
  
  // New message button
  if (newMessageBtn) {
    newMessageBtn.addEventListener('click', function() {
      if (successMessage) successMessage.style.display = 'none';
      if (contactFormContainer) contactFormContainer.style.display = 'block';
    });
  }
  
  // Scroll reveal animation
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  
  // Add reveal class to elements
  const elementsToReveal = document.querySelectorAll('.feature-card, .service-card, .card, .cta-container, .contact-form-container, .map-placeholder');
  elementsToReveal.forEach(element => {
    element.classList.add('reveal');
  });
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Trigger once on load
  revealOnScroll();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
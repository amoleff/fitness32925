// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.style.display = 'none';
    }
});

// Modal functionality
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

function openMembershipModal() {
    document.getElementById('membershipModal').style.display = 'block';
}

function openBookingModal(className) {
    const modal = document.getElementById('bookingModal');
    document.getElementById('classType').value = className;
    modal.style.display = 'block';
}

function selectPlan(plan) {
    document.getElementById('selectedPlan').value = plan;
    openMembershipModal();
}

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Form submissions
function handleContactSubmit(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send this data to a server
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

function handleMembershipSubmit(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('memberName').value,
        email: document.getElementById('memberEmail').value,
        phone: document.getElementById('memberPhone').value,
        plan: document.getElementById('selectedPlan').value
    };
    
    // Here you would typically send this data to a server
    console.log('Membership form submitted:', formData);
    alert('Thank you for joining FitLife! We will contact you shortly to complete your registration.');
    event.target.reset();
    document.getElementById('membershipModal').style.display = 'none';
}

function handleBookingSubmit(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('bookingName').value,
        email: document.getElementById('bookingEmail').value,
        classType: document.getElementById('classType').value,
        date: document.getElementById('classDate').value,
        time: document.getElementById('classTime').value
    };
    
    // Here you would typically send this data to a server
    console.log('Booking form submitted:', formData);
    alert('Your class has been booked! We will send you a confirmation email shortly.');
    event.target.reset();
    document.getElementById('bookingModal').style.display = 'none';
}

// Set minimum date for class booking to today
document.getElementById('classDate').min = new Date().toISOString().split('T')[0];

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#FFFFFF';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

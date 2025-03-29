:root {
    --primary-color: #7B2CBF;
    --secondary-color: #9D4EDD;
    --accent-color: #E0AAFF;
    --text-color: #333;
    --light-bg: #F8F9FA;
    --white: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

/* Navbar Styles */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: var(--white);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    margin: 0 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    padding: 0 1rem;
    margin-top: 60px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

/* Buttons */
.cta-button {
    background: var(--white);
    color: var(--primary-color);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
}

/* Features Section */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 5rem 5%;
    background: var(--light-bg);
}

.feature-card {
    text-align: center;
    padding: 2rem;
    background: var(--white);
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* Classes Section */
.classes {
    padding: 5rem 5%;
    text-align: center;
}

.classes h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.class-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.class-card {
    background: var(--white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.class-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.class-card h3 {
    padding: 1rem;
    color: var(--primary-color);
}

.class-card p {
    padding: 0 1rem 1rem;
}

/* Membership Section */
.membership {
    padding: 5rem 5%;
    background: var(--light-bg);
    text-align: center;
}

.membership h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.pricing-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.pricing-card.featured {
    transform: scale(1.05);
    border: 2px solid var(--primary-color);
}

.price {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    margin: 1rem 0;
}

.price span {
    font-size: 1rem;
    color: var(--text-color);
}

.pricing-card ul {
    list-style: none;
    margin: 2rem 0;
}

.pricing-card li {
    margin: 0.5rem 0;
}

/* Contact Form */
.contact {
    padding: 5rem 5%;
    text-align: center;
}

.contact h2 {
    margin-bottom: 3rem;
}

.contact-container {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    margin: 2rem auto;
    position: relative;
}

.close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Footer */
footer {
    background: var(--primary-color);
    color: var(--white);
    padding: 3rem 5% 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
}

.footer-section a {
    color: var(--white);
    text-decoration: none;
    display: block;
    margin: 0.5rem 0;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Mobile Menu */
.mobile-menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1001;
}

.mobile-menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.mobile-menu-content a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 1rem 0;
}

/* Book Button */
.book-button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-top: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.book-button:hover {
    background: var(--secondary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 1rem;
    }

    .nav-links {
        margin: 1rem 0;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .pricing-card.featured {
        transform: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .nav-links {
        display: none;
    }
}

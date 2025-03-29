/* Add these new styles to your existing CSS */

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

/* Contact Form */
.contact {
    padding: 5rem 5%;
    background: var(--light-bg);
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

/* Modal */
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
    .mobile-menu-btn {
        display: block;
    }

    .nav-links {
        display: none;
    }

    .mobile-menu {
        display: block;
    }

    .modal-content {
        margin: 1rem;
    }
}

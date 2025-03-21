import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ContactUs.css';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("xwpllqla");

    if (state.succeeded) {
        return (
            <div className="contact-container">
                <div className="form-container">
                    <h2>Thank you for your message!</h2>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            </div>
        );
    }

    return (
            <div className="contact-container">
            <Navbar />
                <h1>Contact Us</h1>
            <p className="contact-description">
                Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible. We're here to help!
            </p>
            
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="name-row">
                        <div className="input-group">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name*"
                                required
                            />
                            <ValidationError 
                                prefix="First Name" 
                                field="firstName"
                                errors={state.errors}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name*"
                                required
                            />
                            <ValidationError 
                                prefix="Last Name" 
                                field="lastName"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            required
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Phone Number*"
                            required
                        />
                        <ValidationError 
                            prefix="Phone" 
                            field="phoneNumber"
                            errors={state.errors}
                        />
                    </div>
                    
                    <div className="input-group">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message..."
                            required
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;

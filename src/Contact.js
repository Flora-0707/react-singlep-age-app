import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <span className="contact-us">Need help? Please contact us!</span>
            <div className="contact-method">
                <span className="contact-email">Email: find-your-lost-pet@gmail.com</span><br />
                <span className="contact-phone">Phone: +1-(666)-777-8886</span>
            </div>
        </div>
    );
}

export default Contact;
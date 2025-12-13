import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './contact.module.css';

export const metadata = {
    title: "Contact Us | Lumière Dining",
    description: "Get in touch with us for reservations, private events, or general inquiries.",
};

export default function ContactPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>We'd love to hear from you.</p>
            </header>

            <div className={`container ${styles.grid}`}>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <MapPin className={styles.icon} size={28} />
                        <div>
                            <h3 className={styles.label}>Location</h3>
                            <p className={styles.value}>123 Culinary Ave, District 5, Flavor City</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <Phone className={styles.icon} size={28} />
                        <div>
                            <h3 className={styles.label}>Phone</h3>
                            <p className={styles.value}>+1 (555) 019-2834</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <Mail className={styles.icon} size={28} />
                        <div>
                            <h3 className={styles.label}>Email</h3>
                            <p className={styles.value}>reservations@lumieredining.com</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <Clock className={styles.icon} size={28} />
                        <div>
                            <h3 className={styles.label}>Hours</h3>
                            <p className={styles.value}>Tue-Sun: 5pm - 11pm</p>
                            <p className={styles.value}>Happy Hour: 5pm - 7pm</p>
                            <p className={styles.value} style={{ opacity: 0.6 }}>Closed Mondays</p>
                        </div>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937596!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647526233156!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

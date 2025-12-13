import Link from 'next/link';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                {/* Brand */}
                <div className={styles.column}>
                    <h3 className={styles.brand}>Lumière.</h3>
                    <p className={styles.text}>
                        Modern French cuisine where tradition meets innovation. Savor the art of dining in an ambiance of understated luxury.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    </div>
                </div>

                {/* Contact */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Visit Us</h4>
                    <div className={styles.contactItem}>
                        <MapPin size={18} className={styles.icon} />
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                            123 Culinary Ave, District 5, Flavor City
                        </a>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={18} className={styles.icon} />
                        <a href="tel:+15550199">+1 (555) 019-2834</a>
                    </div>
                    <div className={styles.contactItem}>
                        <Clock size={18} className={styles.icon} />
                        <div>
                            <p>Tue-Sun: 5pm - 11pm</p>
                            <p>Happy Hour: 5pm - 7pm</p>
                            <span className={styles.note}>Closed Mondays</span>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Explore</h4>
                    <div className={styles.linksStack}>
                        <Link href="/menu">Seasonal Menu</Link>
                        <Link href="/reservations">Book a Table</Link>
                        <Link href="/about">Our Story</Link>
                        <Link href="/order-online">Order Online</Link>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Lumière Dining. All rights reserved.</p>
            </div>
        </footer>
    );
}

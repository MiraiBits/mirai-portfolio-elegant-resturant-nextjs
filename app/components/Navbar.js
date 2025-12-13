"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    Lumière.
                </Link>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    <Link href="/menu" className={styles.link}>Menu</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/reservations" className={styles.link}>Reservations</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                    <Link href="/reservations" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>
                        Book Table
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileOverlay}>
                        <div className={styles.mobileLinks}>
                            <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                            <Link href="/reservations" onClick={() => setIsOpen(false)}>Reservations</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

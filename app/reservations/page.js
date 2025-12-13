"use client";
import React, { useState } from 'react';
import styles from './reservations.module.css';

export default function ReservationsPage() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '2',
        name: '',
        email: '',
        phone: '',
        requests: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setSubmitted(true), 500);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    if (submitted) {
        return (
            <div className={styles.pageContainer} style={{ textAlign: 'center', paddingTop: '10rem', height: '100vh' }}>
                <div className="container">
                    <h1 className={styles.title}>Reservation Confirmed</h1>
                    <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
                        Thank you, {formData.name}.<br />
                        We look forward to hosting you on {formData.date} at {formData.time} for {formData.guests} guests.
                    </p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Make Another Reservation</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Book a Table</h1>
                    <p className={styles.subtitle}>Secure your spot for an unforgettable dining experience.</p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label className={styles.label}>Date</label>
                            <input type="date" name="date" required onChange={handleChange} className={styles.input} />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label}>Time</label>
                            <select name="time" required onChange={handleChange} className={styles.input}>
                                <option value="">Select Time</option>
                                <option value="17:00">5:00 PM</option>
                                <option value="17:30">5:30 PM</option>
                                <option value="18:00">6:00 PM</option>
                                <option value="18:30">6:30 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="19:30">7:30 PM</option>
                                <option value="20:00">8:00 PM</option>
                                <option value="20:30">8:30 PM</option>
                                <option value="21:00">9:00 PM</option>
                            </select>
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label}>Guests</label>
                            <select name="guests" value={formData.guests} onChange={handleChange} className={styles.input}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n} People</option>)}
                            </select>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Name</label>
                        <input type="text" name="name" required placeholder="John Doe" onChange={handleChange} className={styles.input} />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label className={styles.label}>Email</label>
                            <input type="email" name="email" required placeholder="john@example.com" onChange={handleChange} className={styles.input} />
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label}>Phone</label>
                            <input type="tel" name="phone" required placeholder="(555) 000-0000" onChange={handleChange} className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Special Requests</label>
                        <textarea name="requests" rows="3" placeholder="Allergies, special occasions..." onChange={handleChange} className={styles.input}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>Confirm Reservation</button>
                </form>
            </div>
        </div>
    );
}

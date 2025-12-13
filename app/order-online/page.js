import styles from './order.module.css';

export const metadata = {
    title: "Order Online | Lumière Dining",
    description: "Order takeout or delivery from Lumière Dining.",
};

export default function OrderPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Order Online</h1>
                    <p className={styles.subtitle}>Enjoy Lumière from the comfort of your home.</p>
                </div>
            </header>

            <div className={`container ${styles.grid}`}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Direct Pickup</h2>
                    <p className={styles.cardText}>Order directly from us for the fastest service and exclusive menu items.</p>
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Start Pickup Order</button>
                </div>
                <div className={styles.card} style={{ background: 'var(--secondary)' }}>
                    <h2 className={styles.cardTitle}>Delivery</h2>
                    <p className={styles.cardText}>We deliver via our trusted partners.</p>
                    <div className={styles.links}>
                        <button className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--foreground)' }}>UberEats</button>
                        <button className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--foreground)' }}>DoorDash</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

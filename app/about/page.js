import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
    title: "Our Story | Lumière Dining",
    description: "Learn about the history and philosophy behind Lumière Dining and Chef Antoine Dubois.",
};

export default function AboutPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Our Story</h1>
                    <p className={styles.subtitle}>A passion for perfection.</p>
                </div>
            </header>

            <section className="section container">
                <div className={styles.contentGrid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.sectionHeading}>The Beginning</h2>
                        <p className={styles.text}>
                            Established in 2015, Lumière began as a small bistro with a big dream: to bring the authentic flavors of Provence to the heart of the city.
                            Founded by Chef Antoine Dubois, whose grandmother taught him that "cooking is an act of love," the restaurant quickly gained acclaim for its
                            unpretentious yet sophisticated approach to French cuisine.
                        </p>
                        <p className={styles.text}>
                            Over the years, we have evolved, but our core philosophy remains unchanged: respect the ingredient, honor the tradition, and welcome every guest like family.
                        </p>
                    </div>
                    <div className={styles.imageColumn}>
                        {/* Reusing interior image for now */}
                        <Image src="/images/interior.png" alt="Restaurant Interior" width={600} height={400} style={{ borderRadius: '8px' }} />
                    </div>
                </div>
            </section>

            <section className={styles.chefSection}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className={styles.sectionHeading} style={{ color: '#fff' }}>Meet Chef Antoine</h2>
                    <p className={styles.text} style={{ maxWidth: '700px', margin: '0 auto' }}>
                        "For me, a plate is a canvas. The colors are the vegetables, the textures are the proteins, and the sauce is the emotion that ties it all together."
                    </p>
                </div>
            </section>
        </div>
    );
}

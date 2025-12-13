import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/hero.png"
                        alt="Restaurant Ambience"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.overlay} />
                </div>
                <div className={`animate-fade-in ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>Lumière.</h1>
                    <p className={styles.heroSubtitle}>Where Culinary Art Meets Soul</p>
                    <div className={styles.ctaGroup}>
                        <Link href="/reservations" className="btn btn-primary">Book a Table</Link>
                        <Link href="/menu" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>View Menu</Link>
                    </div>
                </div>
            </section>

            {/* Intro / Features */}
            <section className="section container">
                <div className="section-header">
                    <span className="section-subtitle">Experience Excellence</span>
                    <h2 className="section-title">A Feast for the Senses</h2>
                </div>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Farm to Table</h3>
                        <p className={styles.cardText}>We partner with local farms to bring you the freshest, organic ingredients daily.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Master Chefs</h3>
                        <p className={styles.cardText}>Led by Chef Antoine, our kitchen is a playground of flavor and innovation.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3 className={styles.cardTitle}>Curated Wines</h3>
                        <p className={styles.cardText}>Our sommelier has hand-picked over 200 labels to complement your meal.</p>
                    </div>
                </div>
            </section>

            {/* About/Dish Split */}
            <section className="section" style={{ background: '#131924' }}>
                <div className={`container ${styles.splitSection}`}>
                    <div className={styles.textContent}>
                        <span className="section-subtitle">Our Signature</span>
                        <h2 className="section-title">Truffle Filet Mignon</h2>
                        <p className="mb-4" style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                            Experience the tenderness of premium aged beef, seared to perfection and bathed in our secret black truffle reduction.
                            This dish defines the Lumière philosophy: simplicity, quality, and decadence.
                        </p>
                        <Link href="/menu" className="btn btn-outline" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                            Explore Full Menu
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/dish.png"
                            alt="Signature Filet Mignon"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* Interior/Vibe Split (Reverse) */}
            <section className="section">
                <div className={`container ${styles.splitSection} ${styles.reverse}`}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/interior.png"
                            alt="Dining Room Interior"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.textContent}>
                        <span className="section-subtitle"> The Ambience</span>
                        <h2 className="section-title">Intimate & Elegant</h2>
                        <p className="mb-4" style={{ color: '#94a3b8', lineHeight: '1.8' }}>
                            Designed for those who appreciate the finer things. Soft lighting, velvet seating, and acoustic perfection create
                            an atmosphere where conversations flow as smoothly as the wine.
                        </p>
                        <Link href="/reservations" className="btn btn-primary">Reserve Your Spot</Link>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="section container text-center" style={{ paddingTop: '2rem' }}>
                <h2 className="section-title">Guest Stories</h2>
                <div className={styles.reviewBox}>
                    <p className={styles.reviewText}>
                        "I have eaten all over Paris and New York, but Lumière surprises me every time. The attention to detail is unmatched."
                    </p>
                    <div className={styles.stars}>★★★★★</div>
                    <div className={styles.author}>— Jonathan Gold, Food Critic</div>
                </div>
            </section>
        </main>
    );
}

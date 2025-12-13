import Image from 'next/image';
import styles from './menu.module.css';

export const metadata = {
    title: "Seasonal Menu | Lumière Dining",
    description: "Explore our seasonal menu featuring locally sourced ingredients and exquisite flavors.",
};

const menuItems = {
    starters: [
        { name: "Truffle Arancini", price: "18", description: "Crispy risotto balls, black truffle, mozzarella, garlic aioli.", diet: ["V"], image: "/images/menu/truffle_arancini.png" },
        { name: "Wagyu Carpaccio", price: "24", description: "Thinly sliced A5 Wagyu, parmesan shavings, capers, truffle oil.", diet: ["GF"], image: "/images/menu/wagyu_carpaccio.png" },
        { name: "Burrata & Heirloom", price: "20", description: "Fresh burrata, heirloom tomatoes, basil pesto, balsamic glaze.", diet: ["V", "GF"], image: "/images/menu/burrata_heirloom.png" },
        { name: "Scallop Ceviche", price: "22", description: "Citrus cured scallops, chili, coriander, avocado mousse.", diet: ["GF"], image: "/images/menu/scallop_ceviche.png" },
    ],
    mains: [
        { name: "Filet Mignon", price: "55", description: "8oz USDA Prime, truffle mash, asparagus, red wine reduction.", diet: ["GF"], image: "/images/menu/filet_mignon.png" },
        { name: "Pan-Seared Scallops", price: "42", description: "Cauliflower purée, crispy pancetta, lemon butter sauce.", diet: ["GF"], image: "/images/menu/seared_scallops.png" },
        { name: "Wild Mushroom Risotto", price: "32", description: "Arborio rice, porcini mushrooms, parmesan, white truffle oil.", diet: ["V", "GF"], image: "/images/menu/mushroom_risotto.png" },
        { name: "Duck Confit", price: "38", description: "Slow-cooked duck leg, braised red cabbage, orange glaze.", diet: ["GF"], image: "/images/menu/duck_confit.png" },
        { name: "Miso Glazed Black Cod", price: "48", description: "Sustainably sourced cod, baby bok choy, ginger dashi.", diet: [], image: "/images/menu/black_cod.png" },
    ],
    desserts: [
        { name: "Dark Chocolate Fondant", price: "16", description: "Molten center, madagascan vanilla ice cream.", diet: ["V"], image: "/images/menu/chocolate_fondant.png" },
        { name: "Lemon Tart", price: "14", description: "Zesty lemon curd, crumbly pastry, italian meringue.", diet: ["V"], image: "/images/menu/lemon_tart.png" },
        { name: "Artisan Cheese Board", price: "22", description: "Selection of local and imported cheeses, honeycomb, crackers.", diet: ["V"], image: "/images/menu/cheese_board.png" },
    ]
};

export default function MenuPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Seasonal Menu</h1>
                    <p className={styles.subtitle}>A culinary journey through the finest ingredients of the season.</p>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '6rem' }}>
                {Object.entries(menuItems).map(([category, items]) => (
                    <section key={category} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>{category}</h2>
                        <div className={styles.grid}>
                            {items.map((item, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.itemName}>{item.name}</h3>
                                            <div className={styles.line}></div>
                                            <span className={styles.price}>${item.price}</span>
                                        </div>
                                        <p className={styles.description}>{item.description}</p>
                                        <div className={styles.tags}>
                                            {item.diet.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-heading",
    display: 'swap',
    weight: ['400', '500', '600', '700']
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-body",
    display: 'swap',
    weight: ['300', '400', '500', '600']
});

export const metadata = {
    title: "Lumière Dining | Modern French Cuisine",
    description: "Experience the finest modern French cuisine in an intimate setting. Book your table today.",
    openGraph: {
        title: "Lumière Dining",
        description: "Modern French cuisine in the heart of the city.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Lumière Dining",
        "image": "https://restaurant-portfolio.com/images/hero.png",
        "url": "https://restaurant-portfolio.com",
        "telephone": "+15550192834",
        "menu": "https://restaurant-portfolio.com/menu",
        "servesCuisine": "French",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Culinary Ave",
            "addressLocality": "Flavor City",
            "addressRegion": "FC",
            "postalCode": "10101",
            "addressCountry": "US"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "17:00",
            "closes": "23:00"
        }
    };

    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${cormorant.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                {children}
                <Footer />

                {/* Mobile Sticky CTA */}
                <div className="sticky-cta">
                    <a href="/reservations" className="btn btn-primary" style={{ width: '100%', borderRadius: '4px' }}>
                        Book a Table
                    </a>
                </div>
            </body>
        </html>
    );
}

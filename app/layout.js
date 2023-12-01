import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "CVC Energía",
    description: "CVC Energía",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${outfit.className} overflow-x-hidden`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

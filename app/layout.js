import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
            </body>
        </html>
    );
}

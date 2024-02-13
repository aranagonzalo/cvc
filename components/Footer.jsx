import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex justify-between h-[204px] w-full bg-custom-grey text-custom-cream py-10 px-20 gap-6">
            <div className="h-full flex flex-col items-center justify-start relative">
                <Image
                    src="/images/logo/logo.png"
                    className="object-contain"
                    width={210}
                    height={210}
                    alt="Logo CVC"
                />
                <p className="absolute top-[48px] left-[70px] font-light text-[9px]">
                    Energía que potencia tu desarrollo.
                </p>
                <Image
                    src="/images/landing/mega_homologado.png"
                    width={110}
                    height={20}
                    className="absolute top-[88px] left-[60px]"
                    alt="Mega homologado"
                />
            </div>
            <div className="flex flex-wrap items-center justify-start w-1/2 gap-6 self-center">
                <Link href="/historia" className="h-fit text-sm font-light">
                    Historia
                </Link>
                <Link href="/cultura" className="h-fit text-sm font-light">
                    Cultura CVC
                </Link>
                <Link
                    href="/ahorra-energia"
                    className="h-fit text-sm font-light"
                >
                    Ahorra Energía
                </Link>
                <Link
                    href="/guia-de-reclamos"
                    className="h-fit text-sm font-light"
                >
                    Reclamos
                </Link>
                <Link href="/" className="h-fit text-sm font-light">
                    Noticias
                </Link>
                <Link href="/" className="h-fit text-sm font-light">
                    Cláusula de uso de datos personales
                </Link>
                <Link href="/" className="h-fit text-sm font-light">
                    Términos y condiciones
                </Link>
                <Link
                    href="http://190.187.233.86:83/LINEA_ETICA_FORM"
                    target="_blank"
                    className="h-fit text-sm font-light"
                >
                    Línea ética
                </Link>
                <Link
                    href="http://190.187.233.82/isosi/Login.aspx?ReturnUrl=%2fISOsi"
                    className="h-fit text-sm font-light"
                >
                    Fiscalización
                </Link>
            </div>
            <div className="flex flex-col  justify-between h-full">
                <Instagram size={32} />
                <Facebook size={32} />
                <Linkedin size={32} />
            </div>
        </footer>
    );
};

export default Footer;

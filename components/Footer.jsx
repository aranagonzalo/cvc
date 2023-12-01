import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex h-96 w-full bg-custom-grey text-custom-cream p-20">
            <div className="w-1/3 h-full flex flex-col items-start justify-start relative">
                <Image
                    src="/images/logo/logo.png"
                    className="object-contain"
                    width={210}
                    height={210}
                    alt="Logo CVC"
                />
                <p className="absolute top-[52px] left-[70px] font-light text-[9px]">
                    Energía que potencia tu desarrollo.
                </p>
            </div>
            <div className="w-1/3 h-full">
                <ul className="flex flex-col gap-8">
                    <li className="text-2xl">Menú de información</li>
                    <li className="font-light text-sm">¿Quiénes somos?</li>
                </ul>
            </div>
            <div className="w-1/3 h-full">
                <ul className="flex flex-col gap-6">
                    <li className="font-light text-[13px] flex items-center gap-4">
                        <Phone size={16} />
                        <div className="flex flex-col leading-tight font-extralight">
                            <p>Central: (511) 321-9958</p>
                            <p>Whatsapp: +51 998 166 703</p>
                        </div>
                    </li>
                    <li className="font-light text-[13px] flex items-center gap-4">
                        <Mail size={16} />
                        <div className="flex flex-col leading-tight font-extralight">
                            <p>comentarios-</p>
                            <p>sugerencias@cvcenergia.com.pe</p>
                        </div>
                    </li>
                    <li className="font-light text-[13px] flex items-center gap-4">
                        <MapPin size={16} />
                        <div className="flex flex-col leading-tight font-extralight">
                            <p>Av. Victor Andrés Belaúnde</p>
                            <p>N 147 Centro Empresarial</p>
                            <p>Real Torre 1 Ofic. 801 - 802</p>
                            <p>San Isidro, Lima</p>
                        </div>
                    </li>
                    <li className="font-light text-[13px] flex items-center gap-4">
                        <Clock size={16} />
                        <div className="flex flex-col leading-tight font-extralight">
                            <p>Horario de atención de oficina:</p>
                            <p>08:00hrs. a 16:00hrs.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

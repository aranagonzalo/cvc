"use client"

import Image from 'next/image'
import {motion} from 'framer-motion'

const SideBar = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} className="z-40 absolute flex -right-[100px] top-[490px] bg-custom-blue text-custom-cream gap-4 py-2 px-3 -rotate-90 items-center rounded-t-lg">
        <p className="text-lg font-light mr-8">Contáctanos</p>
        <Image className="rotate-90" src="/images/landing/contact.svg" alt="Icono de contacto" width={28} height={28}/>
        <Image className="rotate-90" src="/images/landing/whatsapp.svg" alt="Icono de contacto" width={28} height={28}/>
    </motion.div>
  )
}

export default SideBar
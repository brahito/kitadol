import React from 'react'
import Image from 'next/image';
import FindLocalUrl from '../../helpers/FindLocalUrl';
import Link from 'next/link';

export const Navbar = () => {
    console.log(FindLocalUrl());
    return (
        <header className="header">
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="logo">
                        <Image src={`${FindLocalUrl()}/imgs/Logo.svg`} width={160} height={35} alt="Logo Kitadol" />
                    </div>
                    <div className="menu">
                        <ul className='d-flex align-items-center'>
                            <li><Link href="/">Kitadol</Link></li>
                            <li><Link href="/">Salud</Link></li>
                            <li><Link href="/">Entretencíon</Link></li>
                            <li><Link href="/">Calculadora de Dosis</Link></li>
                            <li><Link href="/">Preguntas Frecuentes</Link></li>
                            <li><Link href="/">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

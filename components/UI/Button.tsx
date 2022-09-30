import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    arrow: string;
    classes: string
    href: string;
}
//arrow puede recibir el valor de left o right para indicar la direccion de la flecha
//classes recibe las clases que puede tener el boton
export const Button: FC<Props> = ({ children, arrow, classes, href }) => {
    return (
        <a href={href} className={`button ${classes}`}>
            {arrow == 'left' ?
                <i className="uil uil-arrow-left pe-2"></i>
                :
                <></>
            }
            <span>
                {children}
            </span>

            {arrow == 'right' ?
                <i className="uil uil-arrow-right ps-2"></i>
                :
                <></>
            }
        </a>
    )
}

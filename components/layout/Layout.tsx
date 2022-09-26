import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from '../UI/Navbar';
import { Footer } from "../UI";

interface Props {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title ? `${title}` : 'Kitadol'}</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
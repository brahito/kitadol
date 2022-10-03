import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Button } from '../components/UI'
import styles from '../styles/modules/Home.module.scss'

const StyleGuide: NextPage = () => {
    return (
        <Layout>
            <div className='container mt-4'>
                <h1 className='mb-5'>StyleGuide</h1>
                <div>
                    <h2>Encabezados</h2>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>h1</p>
                        <h1>Esto es un titulo</h1>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>h2</p>
                        <h2>Esto es un titulo</h2>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>h3</p>
                        <h3>Esto es un titulo</h3>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>h4</p>
                        <h4>Esto es un titulo</h4>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>h5</p>
                        <h5>Esto es un titulo</h5>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>h6</p>
                        <h6>Esto es un titulo</h6>
                    </div>
                    <h2>Parrafos</h2>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Lead Paragraph</p>
                        <p className='font_lead'>Esto es un parrafo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Subtitle</p>
                        <p className='font_subtitle'>Esto es un subtitulo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Subtitle bold</p>
                        <p className='font_subtitle bold'>Esto es un subtitulo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Body Large</p>
                        <p className='font_body_large'>Esto es un parrafo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Body Regular</p>
                        <p className='font_body'>Esto es un parrafo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Regular Bold</p>
                        <p className='font_regular bold'>Esto es un parrafo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Regular Italic</p>
                        <p className='font_regular italic'>Esto es un parrafo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Regular small</p>
                        <p className='font_body_small'>Esto es un parrafo</p>
                    </div>
                    <div className='d-flex align-items-baseline my-3'>
                        <p className='bold pe-4'>Overline</p>
                        <p className='font_overline'>Esto es un parrafo</p>
                    </div>
                </div>
                <Button href='#' arrow='right' classes='button_primary'>Button</Button>
            </div>
        </Layout>
    )
}

export default StyleGuide
import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Button } from '../components/UI'
import styles from '../styles/modules/Home.module.scss'

const StyleGuide: NextPage = () => {
    return (
        <Layout>
            <div className='container'>
                <Button href='#' arrow='right' classes='button_primary'>Button</Button>
            </div>
        </Layout>
    )
}

export default StyleGuide
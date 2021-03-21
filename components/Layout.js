import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar />
            <main>
                {props.children}
            </main>
            <footer>&copy; Copyright 2021</footer>
        </>
    )
}
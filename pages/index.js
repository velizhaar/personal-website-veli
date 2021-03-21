import Layout from '../components/Layout'
import Name from '../components/Name'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout title="Velizha's Personal Website">
    {/* <!--main------------------------> */}
    <Name />
    {/* <!--about-----------------------> */}
    <About />

    {/* <!--project-------------------> */}
    <Project />
    
    {/* <!--contact-form-------------------> */}

    <Contact />

  </Layout>
  )
}

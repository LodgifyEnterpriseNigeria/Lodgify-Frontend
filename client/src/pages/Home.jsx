import Footer from '../myComponents/Footer'
import AccordionDisplay from '../myComponents/Accordion'
import NavBar from '../myComponents/NavBar'
import Header from '../myComponents/Header'
import FeaturePage from '../myComponents/FeaturePage'
import WaitlistForm from '../features/waitlist/WaitlistForm'

function Home() {
  return (
    <div className='font-main min-h-screen flex flex-col'>
      <NavBar />
      
      <main className='flex-1'>
        <Header />
        
        <section className='py-16 px-8'>
          <FeaturePage />
        </section>

        <section className='bg-gray-50 py-16 px-8'>
          <AccordionDisplay />
        </section>

        <section className='py-16 px-8'>
          <WaitlistForm />
        </section>
      </main>

      <Footer id="contact" />
    </div>
  )
}

export default Home

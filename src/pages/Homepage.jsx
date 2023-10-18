import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <section className='max-w-7xl mx-auto'>
        <div className='text-center py-6'>
          <h2 className='text-[70px]'>
            Welcome to <span className='block'>The Factory</span>
          </h2>
          <p className='py-4'>
            we build tech for the everyday users... <br />
            we choose to be the building block for making the average person
            life better
          </p>
        </div>
      </section>
      <section id='about' className='bg-black text-white'>
        <div className='max-w-7xl mx-auto py-4'>
          <h4 className='text-center text-4xl'>About Us</h4>
          <div>
            <p className='text-center md:text-left'>
              The Factory is a tech laboratory founded to explore scientific and
              technological concept the hopes of making life and living better
              for every human. We on serving humanity by solving both general
              and specific problems of humanity using robotics, mechanics and
              programming as its basic tools and tooling.
            </p>
          </div>
        </div>
      </section>
      <section id='products' className='max-w-7xl mx-auto py-6'>
        <h4 className='text-4xl text-center'>Products</h4>
        <div className='flex flex-col md:flex-row gap-3 items-center mt-4'>
          <div className='border-black w-[340px] md:w-full border-2 p-4 rounded text-center'>
            <h6 className='my-2 text-lg font-medium'>Agro Fresh</h6>
            <p className='mt-2'>
              Your one stop shop to mechanicing your home garden
            </p>
            <button className='text-white bg-black px-3 py-2 rounded mt-4'>
              view
            </button>
          </div>
          <div className='border-black w-[340px] md:w-full border-2 p-4 rounded text-center'>
            <h6 className='my-2 text-lg font-medium'>Agro Net</h6>
            <p className='mt-2'>
              Empower yourself with data to power food and feeding
            </p>
            <button className='text-white bg-black px-3 py-2 rounded mt-4'>
              view
            </button>
          </div>
          <div className='border-black w-[340px] md:w-full border-2 p-4 rounded text-center'>
            <h6 className='my-2 text-lg font-medium'>In Box</h6>
            <p className='mt-2'>
              Let us solve your dietry needs and save you all the stress
            </p>
            <button className='text-white bg-black px-3 py-2 rounded mt-4'>
              view
            </button>
          </div>
        </div>
      </section>
      <section id='cta' className='max-w-7xl mx-auto'>
        <div className='bg-black text-white px-4 py-8 flex flex-col md:flex-row items-center justify-evenly md:rounded-md'>
          <div className='text-center mb-4 md:mb-0'>
            <h4 className='text-2xl md:text-4xl mb-4'>Join our Waiting List</h4>
            <p>To get access on first-hand info and access to beta releases</p>
          </div>
          <div className='flex flex-col items-center'>
            <input
              type='email'
              className='mb-4 text-white placeholder:text-white bg-black border-b-2 border-white focus:outline-none'
              placeholder='Enter your E-mail'
            />
            <button
              className='bg-black text-white py-2 border-2 w-1/2 border-white rounded'
              type='submit'
            >
              Join
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Homepage;

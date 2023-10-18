import x from "../assets/x.svg";
import facebook from "../assets/facebook.svg";
import igram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-evenly border-t-2 border-black p-3 mt-4'>
        <p>THE FACTORY</p>
        <div>
          <h6 className='my-2 text-lg font-medium'>Legal</h6>
          <ul>
            <li>
              <a href=''>Terms and Conditions</a>
            </li>
            <li>
              <a href=''>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='my-2 text-lg font-medium'>Products</h6>
          <ul>
            <li>
              <a href=''>Agro Tech</a>
            </li>
            <li>
              <a href=''>Agro Net</a>
            </li>
            <li>
              <a href=''>In Box</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='my-2 text-lg font-medium'>Contact Us</h6>
          <ul>
            <li>
              <p>+2348142315381</p>
            </li>
            <li>
              <p>okikijesuoluwasina@gmail.com</p>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='my-2 text-lg font-medium'>Social</h6>
          <div className='flex items-center gap-4'>
            <a target='_blank' href='https://facebook.com/'>
              <img src={facebook} alt='Innovative Engineering' />
            </a>
            <a target='_blank' href='https://instagram.com/'>
              <img src={igram} alt='Innovative Engineering' />
            </a>
            <a target='_blank' href='https://twitter.com/'>
              <img src={x} alt='Innovative Engineering' />
            </a>
            <a target='_blank' href='https://www.linkedin.com/'>
              <img src={linkedin} alt='Innovative Engineering' />
            </a>
          </div>
        </div>
      </div>
      <hr className='border border-[#0A142F] w-[100px] mb-2 mt-10 mx-auto' />
      <p className='text-center text-[#0A142F] mb-6'>
        © 2023 THE FACTORY. All Rights Reserved
      </p>
    </footer>
  );
}

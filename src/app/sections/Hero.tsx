import { montserrat } from '../ui/fonts';

const Hero = () => {      
    return(
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-red-100'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 bg-yellow-100'>
            <p>Our Summer Collections</p>
            <h1>
                <span>The New Arrival</span>
                <br />
                <span>Nike</span>
                Shoes            
            </h1>
            <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        </div>
    </section>
    )  
}
export default Hero;
import { montserrat } from '../ui/fonts';
import { palanquin } from '../ui/fonts';

const Hero = () => {      
    return(
    <section id='home' className='bg-white dark:bg-gray-900'>
        <div className='flex py-28 px-4 mx-auto max-w-screen-xl text-center lg:px-8 lg:py-56 md:flex-col'>
            <div className={`${montserrat.className} `}>
               <p className='text-coral-red text-xl'>Our Summer collections</p>
               <h1 className={`${palanquin.className}  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl  dark:text-white`}>
                    The New Arrival <span className='text-coral-red'>Nike</span> Shoes
               </h1>
               <p className={`${montserrat.className} mb-8 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400`}>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
               {/* <Button /> */}
               <div className='xl:text-9xl'>
               </div>
            </div>
            <div className='bg-blue-400'>

            </div>
        </div>
    </section>    
    )  
}
export default Hero;
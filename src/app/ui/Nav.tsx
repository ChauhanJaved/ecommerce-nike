import Link from "next/link";
import Image from "next/image";
import { headerLogo } from "../../../public/images";
import { hamburger } from '../../../public/icons';
import { navLinks } from '../utils/constants';
import { montserrat } from './fonts';


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/" className='bg-red-300'>
          <Image src={headerLogo} alt="Logo" width={129} height={29} className='m-0 w-[129px] h-[29px]' />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden bg-blue-300'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={`${montserrat.className} text-lg text-slate-800`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`bg-red-300 flex gap-2 text-lg leading-normal font-medium ${montserrat.className} max-lg:hidden`}>
            <Link href='/'>Sign In</Link>
            <span>/</span>
            <Link href='/'>Explore Now</Link>
        </div>
        <div className='hidden max-lg:block'>
          <Image src={hamburger} alt='Hamburger Menu' width={25} height={25} />
        </div>

      </nav>
    </header>
  );
};

export default Nav;

import Link from "next/link";
import Image from "next/image";
import { headerLogo } from "../../../public/images";
import { navLinks } from '../utils/constants';
import { montserrat } from './fonts';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt="Logo" width={129} height={29} className='m-0 w-[129px] h-[29px]' />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={`${montserrat.className} text-lg text-slate-800`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

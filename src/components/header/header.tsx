import { FC } from "react";
import styles from "./header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header>
    <nav
      className={`${styles.slideToTop} bg-transparent absolute border-gray-200 px-4 lg:px-6 py-2.5 w-full z-10`}
    >
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <div className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            DerDieDas
          </span>
        </div>
        <div className='flex items-center lg:order-2'>
          <a
            href='https://github.com/awhumayun/DerDieDas'
            className='text-white text-xl hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
          >
            Code
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

import React, { FC } from "react";
import styles from "./loader.module.css";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <div
    className={`${styles.loader} inline-block h-[70px] w-[70px] rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]`}
    role='status'
  >
    <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
      Loading...
    </span>
  </div>
);

export default Loader;

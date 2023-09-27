import logo from '../../../../public/logo.svg';
import Image from "next/image";

export default function Logo() {
  return(
    <Image className='logo' priority src={logo} alt="arrow"/>
  );
};

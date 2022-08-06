import Image from 'next/image';
import Link from 'next/link';

import SmallLogo from '../static/smallLogo.png';
import Qazi from '../static/qazi.jpg';
import {HiOutlineHome} from 'react-icons/hi';
import {BiBookmarks} from 'react-icons/bi';
import {FiBell} from 'react-icons/fi';
import {RiArticleLine} from 'react-icons/ri';
import {BsPencilSquare} from 'react-icons/bs';


const styles = {
  logoContainer: 'cursor-pointer object-contain',
  wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
  iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
  divider: 'border-b',
  profileImageContainer: 'w-[2.4rem] place-items-center',
  profileImage: 'rounded-full',
}

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <BiBookmarks />
        <FiBell />
        <RiArticleLine />
        <div className={styles.divider} />
          <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image 
          className={styles.profileImage}
          src={Qazi}
          />
      </div>
      
    </div>
  )
}

export default ReadersNav;
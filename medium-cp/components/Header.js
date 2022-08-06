import Image from 'next/image';
import Logo from '../static/logo.png';

const Header = () => {

  const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'flex flex-1 max-w-7xl items-center justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'flex cursor-pointer space-x-5 items-center',
    getStarted: 'text-white bg-black py-2 px-4 rounded-full'
  };
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            />
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign In</div>
          <div className={styles.getStarted}>Get Started</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
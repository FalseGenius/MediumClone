import Image from 'next/image';
import Logo from '../static/logo.png';
import { useContext } from 'react';
import {MediumContext} from '../context/MediumContext';
import PostComponent from './PostComponent';
import Modal from 'react-modal';
// import Router from 'next/dist/server/router';
import {useState} from 'react';
// import {useRouter} from 'next/router';
// import {Link} from 'next/link';

Modal.setAppElement('#__next');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: 0,
    border: 'none' 
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)'
  }
}
// <Link href={'/?addNew=1'}>
// </Link>

const Header = () => {
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  const {handleUserAuth, currentUser} = useContext(MediumContext);
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
        {currentUser ? 
          (<div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
              <div onClick={() => setOpen(true)}>Write</div>
            <div className={styles.getStarted}>Get Unlimited Access</div>
          </div>)
        : 
          (<div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div onClick={handleUserAuth}>Sign In</div>
            <div className={styles.getStarted}>Get Started</div>
          </div>)
        
        }
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} styles={customStyles}>
        <PostComponent />
      </Modal>
    </div>
  )
}

export default Header;
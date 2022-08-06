import Image from 'next/image';
import Logo from '../static/banner.png';

const Banner = () => {

  const styles = {
    content: 'flex flex-1 max-w-7xl items-center justify-between',
    header1: 'max-w-xl text-[6rem] font-mediumSerif',
    button: 'bg-black text-white py-2 px-4 rounded-full',
    wrapper: 'h-max-[10rem] bg-[#FCC017] flex items-center justify-center border-y border-black'
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5'>
          <h1 className={styles.header1}>Stay         Curious</h1>
          <h3 className='text-2xl'>Discover thinking, expertise             and stories from writers on any topic</h3>
          <button className={styles.button}>Start Reading</button>
        </div>
        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1'
          src={Logo}
          width={500}
          height={400}
        />
      </div>
    </div>

  )
}

export default Banner;
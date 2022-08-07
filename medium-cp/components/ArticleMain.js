import Image from 'next/image';
import Qazi from '../static/qazi.jpg';
import {AiFillPlayCircle} from 'react-icons/ai';
import {IoLogoTwitter} from 'react-icons/io';
import {FaFacebook} from 'react-icons/fa';
import {BiBookmarks} from 'react-icons/bi';
import {FiMoreHorizontal} from 'react-icons/fi';
import {GrLinkedin} from 'react-icons/gr';
import Logo from '../static/banner.png';
import {HiOutlineLink} from 'react-icons/hi';


const styles = {
  wrapper: 'flex items-center flex-[3] justify-center border-l border-r',
  content: ' h-screen p-[2rem] w-full overflow-y-scroll',
  postHeaderContainer: 'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
  authorContainer: 'flex gap-[1rem]',
  authorProfileImageContainer: 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
  column: 'flex-col flex-1 justify-center',
  postDetails: 'flex text-[#787878] gap-[.2rem]',
  listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
  socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
  space: 'w-[.5rem]',
  articleMainContainer: 'flex flex-col gap-[1rem]',
  bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
  image: 'object-contain',
  title: 'font-bold text-3xl',
  subTitle: 'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
  articleText: 'font-mediumSerif text-[1.4rem] text-[#292929]',
  
}
// src={authorData ? authorData.data.imageurl : Logo}
const ArticleMain = ({post, author}) => {
  console.log(post, author, '🔥');
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image 
                src={Qazi} 
                width={100} height={100} />
            </div>
            <div className={styles.column}>
              <div>{author?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>{new Date(post.data?.postedOn).toLocaleString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })} • {post.data?.postLength} Min Read • </span><span className={styles.listenButton}><AiFillPlayCircle /> Listen </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
          <IoLogoTwitter />
          <FaFacebook />
          <GrLinkedin />
          <HiOutlineLink />
          <div className={styles.space} />
          <BiBookmarks />
          <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image src={Logo} className={styles.image} width={200} height={100} />
          </div>
          <h1 className={styles.title}>{post?.data?.title}</h1>
          <h4 className={styles.subTitle}>
            <div>{author?.data?.name}, {' '} {new Date(post.data?.postedOn).toLocaleString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}</div>
            <div>{post?.data?.brief}</div>
          </h4>
          <div className={styles.articleText}>
            {post?.data?.body}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleMain;
import Image from 'next/image';
import Qazi from '../static/qazi.jpg';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdMarkEmailUnread} from 'react-icons/md';
import ReplitLogo from '../static/replit.png';
import tutorialImg from '../static/tutorial.jpg';
import CpLogo from '../static/cp.png';
import JsLogo from '../static/jsLogo.png';


const styles = {
  wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-1 p-[2rem]',
  accentedButton: 'flex bg-black text-white items-center justify-center my-[2rem] text-sm py-[.6rem] rounded-full cursor-pointer',
  searchBar: 'gap-[.6rem] flex items-center border rounded-full h-[2.6rem] px-[1rem]',
  searchInput: 'w-full bg-none rounded-full outline-none',
  authorContainer: 'my-[1rem]',
  authorImageContainer: 'h-[4rem] w-[4rem] rounded-full overflow-hidden',
  authorName: 'font-semibold mb-[.2rem] mt-[1rem]',
  authorFollowers: 'text-[#787878]',
  authorActions: 'flex  gap-[.6rem] my-[1rem] items-center',
  actionButton: 'text-white text-sm cursor-pointer bg-[#1A8917] rounded-full px-[.6rem] py-[.4rem]',
  recommendationContainer: '',
  title: '',
  recommendationAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  recommendationAuthorContainer: 'flex gap-[.6rem] items-center',
  recommendationAuthorName: 'text-sm',  
  recommendationTitle: 'font-bold',
  recommendationContainerThumbnail: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
  recommendationThumbnail: 'object-cover',
  articleContentWrapper: 'flex items-center justify-center cursor-pointer my-[2rem] gap-[0.5rem]',
  articleContent: 'flex-[4]',
}

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input 
          className={styles.searchInput}
          type='text'
          placeholder='Search...'
          />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorImageContainer}>
          <Image 
            src={Qazi}
            width={100}
            height={100}
            />
        </div>
        <div className={styles.authorName}>False Genius</div>
        <div className={styles.authorFollowers}>1M Followers</div>
        <div className={styles.authorActions}>
          <div className={styles.actionButton}>Follow</div>
          <div className={styles.actionButton}><MdMarkEmailUnread />            </div>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((item) => (
            <div className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div className={styles.recommendationAuthorProfileImageContainer}>
                    <Image src={item.author.logo} width={100} height={100}/>
                  </div>
                  <div className={styles.recommendationAuthorName}>{item.author.name}</div>
                  </div>
                  <div className={styles.recommendationTitle}>{item.title}</div>
              </div>
              <div className={styles.recommendationContainerThumbnail}>
                <Image src={item.image} className={styles.recommendationThumbnail} width={100} height={100}/>
              </div>
            </div>
            
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Recommendations;

const recommendedPosts = [
  {
    title: 'What can you do with Replit?',
    image: ReplitLogo,
    author: {
      name: 'False Genius',
      logo:  CpLogo
    }
  },
  {
    title: 'The Ultimate JavaScript Course For Developers',
    image: tutorialImg,
    author: {
      name: 'Bernard Shaw',
      logo:  CpLogo
    }
  },
  {
    title: 'Learn Artificial Intelligence by Andrew Ng',
    image: JsLogo,
    author: {
      name: 'Maryse',
      logo:  CpLogo
    }
  },
]
import Logo from '../static/logo.png';
import Image from 'next/image';
import { BsBookmark } from 'react-icons/bs';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {db} from '../firebase';
import {getDoc, doc} from 'firebase/firestore';
import {useContext} from 'react';
import {MediumContext} from '../context/MediumContext';


const styles = {
  wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer ',
  authorContainer: 'flex items-center gap-[.4rem]',
  authorImageContainer: 'grid items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  authorImage: 'object-cover',
  authorName: 'font-semibold',
  title: 'font-bold text-2xl',
  briefing: 'text-[#787878]',
  postDetails: 'flex-[2.5] flex flex-col',
  detailsContainer: 'flex items-center justify-between text-[#787878]',
  articleDetails: 'my-2 text-[.8rem]',
  category: 'bg-[#F2F3F2] p-1 rounded-full',
  bookmarkContainer: 'cursor-pointer',
  thumbnailContainer: 'flex-1',
}

const Postcard = ({post}) => {
  const [authorData, setAuthorData] = useState(null);
  const {users} = useContext(MediumContext);

  useEffect(() => {
    // console.log(users.find((user) => user.id === post.data.author))
    const getAuthorData = async () => {
      setAuthorData(await users.find((user) => user.id === post.data.author))
    }

    getAuthorData();
  }, [])
  
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={authorData ? authorData.data.imageurl : Logo}
                className={styles.authorImage}
                height={40}
                width={40}
              />
            </div>
            <div className={styles.authorName}>{authorData?.data.name}</div>
          </div>
  
          <div>
            <h1 className={styles.title}>{post.data.title}</h1>
            <div className={styles.briefing}>{post.data.brief}</div>
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short'
              })} • 
              {post.data.postLength} min read •
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <BsBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
       
        <div className={styles.thumbnailContainer}>
          <Image 
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            height={100}
            width={100}
            />
        </div>
        
      </div>
    </Link>
  )
}

export default Postcard;
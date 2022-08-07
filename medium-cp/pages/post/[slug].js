import ReadersNav from '../../components/ReadersNav';
import ArticleMain from '../../components/ArticleMain';
import Recommendations from '../../components/Recommendations';
import {useContext} from 'react';
import {MediumContext} from '../../context/MediumContext';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

const styles = {
  content: 'flex'
}

const Post = () => {
  const {posts, users} = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (posts.length === 0 || users.length === 0) return;
    setPost(posts.find((post) => post.id === router.query.slug));
    setAuthor(users.find((user) => user.id === post.data?.author));
    // console.log(users.find((user) => user.id === post.data?.author), '⭐');
  }, [post])
  
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author}/>
      <Recommendations />
    </div>
  )
}

export default Post;
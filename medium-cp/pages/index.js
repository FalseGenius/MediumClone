import Header from '../components/Header';
import Banner from '../components/Banner';
import Postcard from '../components/Postcard';
import {MediumContext} from '../context/MediumContext';
import {useContext} from 'react';


  const styles = {
    postsList: 'gap-3 flex flex-col sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3',
    container: 'max-w-7xl flex-1',
    main: 'flex justify-center',
    wrapper: 'mx-auto'
  };

export default function Home() {
  const {posts} = useContext(MediumContext);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            {posts.map((post) => (
              <Postcard 
                post={post} key={post.id}
                />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
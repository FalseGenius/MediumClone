import {createContext, useState, useEffect} from 'react';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore';
import {db} from '../firebase';

const MediumContext = createContext();
const MediumProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // do something here
    const getUsers = async () => {
      const querySnapShot = await getDocs(collection(db, 'users'));
      setUsers(querySnapShot.docs.map((doc) => {
        return {
          id: doc.id,
          data: {
            ...doc.data()
          }
        }
      }));
    }
    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapShot = await getDocs(collection(db, 'articles'));
      // console.log(querySnapShot.docs.map((doc) => console.log(doc.data())));
      setPosts(querySnapShot.docs.map((doc) => {
        return {
          id: doc.id,
          data: {
            body: doc.data().body,
            brief: doc.data().brief,
            category: doc.data().category,
            postLength: doc.data().postLength,
            bannerImage: doc.data().bannerImage,
            title: doc.data().title,
            comments: doc.data().comments,
            postedOn: doc.data().postedOn.toDate(),
            author: doc.data().author
          }
        }
      }))
    }
    getPosts();
  }, [])

  return (
    <MediumContext.Provider value={{users, posts}}>
      {children}
    </MediumContext.Provider>
  )
}

export {MediumContext, MediumProvider};
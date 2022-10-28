import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=> {
            router.push('/')
            console.log('use effect runs')
        }, 3000)
        

    })
    return (
        <div className="not-found">
          <h1>Ooops...</h1>
          <h2>That page cannot be found :(</h2>
          <p>Going back to the <Link href="/"><a>Homepage</a></Link> is 3 seconds...</p>
        </div>
      );
    }
     
    export default NotFound;

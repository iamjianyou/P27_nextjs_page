import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=> {
            router.push("/")
            console.log('use effect runs')
        }, 3000)
        

    })
    return (
        <div className="not-found">

            <h1>Ooooops...</h1>
            <h2>That page can't be found.</h2>
            <p> Go back to the 
                <Link href="/" className={styles.btn}> Home </Link>
            </p>
        </div>
    )
}

export default NotFound;


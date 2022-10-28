import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props: {xiaomi: data}
    }    
}

const Mi = ({xiaomi}) => {
    return (
        <div> 
            <h1> mi page </h1>
            {
                xiaomi.map((mi) => (
                    <Link href={'/mi/' + mi.id} key={mi.id} className={styles.single}>
                    
                            <h3 > {mi.name}</h3>
                        

                    </Link>
                ))
            }
        </div>
    )
}

export default Mi
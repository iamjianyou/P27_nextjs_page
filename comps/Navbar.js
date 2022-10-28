import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={150} height={100}/>
            <h1> Mi list </h1>
            </div>
            <Link href="/"> Home </Link>
            <Link href="/about"> About </Link>
            <Link href="/mi"> Mi Listing </Link>
            

            
         

        </nav>
    );

}
export default Navbar
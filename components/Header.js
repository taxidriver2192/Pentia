import Link from 'next/link';
import Logo from '../images/logo.png'
import Image from 'next/image'

var firmaNavn = "Et eller andet"

export default function Header() {
  return (
    <header>
        <div className='logo'>
            <Link href="/">
            <a>
                <Image
                src={Logo}
                color="green"
                height={50}
                width={50}
                alt={firmaNavn}
                />
            </a>
            </Link>
        </div>
    </header>
  );
}

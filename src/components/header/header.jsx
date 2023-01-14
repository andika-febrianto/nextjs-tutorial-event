import Image from "next/image"
import Link from "next/link"

export const Header =()=>(
  <header>
    <div className="topNav">
      <nav>
      <Image src={'/images/logo_black.png'} width={50} height={50} alt='logo'/> 
       <div>
        <ul>
          <li><Link href='/' passHref>Home</Link></li>
          <li> <Link href='/events'>Events</Link></li>
          <li> <Link href='/about-us'>About Us</Link></li>
        </ul>
       </div>
      </nav>
      <p className="title">Events is Happen</p>
    </div>
  </header>
)
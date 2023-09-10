import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to peerworking.ch</h1>
      <ul>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
        <li><Link href='/projects'>Projects</Link></li>
      </ul>
    </div>
  )
}

export default HomePage
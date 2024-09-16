// components
import Image from 'next/image'
import OnTimeSvg from '@svg/ontime.svg'

const Header = () => {
  return (
    <header>
      <Image alt="logo" src={OnTimeSvg} />
    </header>
  )
}

export default Header

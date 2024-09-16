// components
import Image from 'next/image'
import OnTimeSvg from '@svg/ontime.svg'

const Header = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <header {...props}>
      <Image alt="logo" src={OnTimeSvg} />
    </header>
  )
}

export default Header

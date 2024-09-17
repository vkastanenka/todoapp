// components
import Image from 'next/image'
import OnTimeSvg from '@svg/ontime.svg'

// utilites
import cx from 'classnames'

const Header = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <header className={cx('px-3')} {...props}>
      <Image alt="logo" src={OnTimeSvg} />
    </header>
  )
}

export default Header

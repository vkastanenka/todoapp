// components
import Image from 'next/image'
import OnTimeSvg from './svg/ontime.svg'

// modules
import FeatureSelect from './components/featureSelect'
// import Calendar from './components/calendar'

// utilities
import cx from 'classnames'


export default function Home() {
  return (
    <main className={cx('bg-gradient-primary')}>
      <div className={cx('px-8', 'py-16')}>
        <div>
          <Image alt="logo" src={OnTimeSvg} />
        </div>
        <FeatureSelect />
        {/* <Calendar /> */}
      </div>
    </main>
  )
}

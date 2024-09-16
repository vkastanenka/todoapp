// modules
import Header from '@components/header'
import FeatureSelect from '@components/featureSelect'
import Calendar from '@components/calendar'
import Schedule from '@components/schedule'

// utilities
import cx from 'classnames'

const Home = ({ ...props }) => {
  return (
    <main className={cx('px-8', 'py-16')} {...props}>
      <div>
        <Header />
        <FeatureSelect />
        <Calendar />
        <Schedule />
      </div>
    </main>
  )
}

export default Home

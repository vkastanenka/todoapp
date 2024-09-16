// modules
import Header from '@components/header'
import FeatureSelect from '@components/featureSelect'
import Calendar from '@components/calendar'

// utilities
import cx from 'classnames'

const Home = () => {
  return (
    <main className={cx('px-8', 'py-16')}>
      <div>
        <Header />
        <FeatureSelect />
        <Calendar />
      </div>
    </main>
  )
}

export default Home

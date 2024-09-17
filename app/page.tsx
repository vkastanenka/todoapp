// modules
import Header from '@components/header'
import FeatureSelect from '@components/featureSelect'
import Calendar from '@components/calendar'
import Schedule from '@components/schedule'
import AddData from '@components/addData'

// utilities
import cx from 'classnames'

const Home = () => {
  return (
    <main>
      <div className={cx('px-6', 'py-16')}>
        <Header />
        <FeatureSelect />
        <Calendar />
        <Schedule />
      </div>
      <AddData />
    </main>
  )
}

export default Home

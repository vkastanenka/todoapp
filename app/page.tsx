// modules
import Header from '@components/header'
import FeatureSelect from '@components/featureSelect'
// import Calendar from '@components/calendar'
// import Schedule from '@components/schedule'
import Notes from '@components/notes'
import AddData from '@components/addData'

// utilities
import cx from 'classnames'

const Home = () => {
  return (
    <main>
      <div className={cx('px-6', 'py-16')}>
        <Header />
        <FeatureSelect />
        {/* <Calendar />
        <Schedule /> */}
        <Notes />
      </div>
      <AddData />
    </main>
  )
}

export default Home

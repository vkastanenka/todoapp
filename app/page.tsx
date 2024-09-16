// modules
import Header from '@components/header'
import FeatureSelect from '@components/featureSelect'
import Calendar from '@components/calendar'
import Schedule from '@components/schedule'
// import AddData from '@components/addData'
// import FormNote from '@components/formNote'
// import FormSchedule from '@components/formSchedule'

// utilities
import cx from 'classnames'

const Home = () => {
  return (
    <main>
      <div className={cx('px-8', 'py-16')}>
        <Header />
        <FeatureSelect />
        <Calendar />
        <Schedule />
        {/* <AddData /> */}
      </div>
      {/* <FormNote />
      <FormSchedule /> */}
    </main>
  )
}

export default Home

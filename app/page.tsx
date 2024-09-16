import cx from 'classnames'

export default function Home() {
  return (
    <main
      className={cx('flex', 'justify-center', 'items-center', 'min-h-screen')}
    >
      <div className={cx('w-[1200px]', 'text-white')}>
        <h1 className={cx('pb-8')}>on.time</h1>
        <FeatureSelect />
        <Calendar />
      </div>
    </main>
  )
}

const FeatureSelect = () => {
  return (
    <div className={cx('bg-purple', 'rounded', 'p-1', 'flex')}>
      <button
        className={cx(
          'rounded',
          'bg-purple-dark',
          'text-white',
          'py-2',
          'px-8',
          'text-center',
          'grow'
        )}
      >
        Schedule
      </button>
      <button
        className={cx(
          'rounded',
          'text-white',
          'py-2',
          'px-8',
          'text-center',
          'grow'
        )}
      >
        Note
      </button>
    </div>
  )
}

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const currentDay = new Date()

  return (
    <div>
      <div>
        <h2>
          {months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
      </div>
      <div>
        
      </div>
    </div>
  )
}

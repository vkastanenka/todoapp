import cx from 'classnames'

const FeatureSelect = ({ ...props }) => {
  return (
    <div className={cx('py-8', 'px-6')} {...props}>
      <div className={cx('bg-purple', 'rounded', 'p-1', 'flex', 'gap-4')}>
        <button
          className={cx(
            'rounded',
            'bg-purple-dark-200',
            'text-white',
            'py-2',
            'text-center',
            'grow',
            'w-full',
            'font-semibold'
          )}
        >
          Schedule
        </button>
        <button
          className={cx(
            'rounded',
            'text-white',
            'py-2',
            'text-center',
            'grow',
            'w-full',
            'font-semibold'
          )}
        >
          Note
        </button>
      </div>
    </div>
  )
}

export default FeatureSelect

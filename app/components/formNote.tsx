// utilities
import cx from 'classnames'

const FormNote = ({ ...props }) => {
  return (
    <div
      className={cx(
        // 'fixed',
        // 'h-screen',
        // 'w-screen',
        // 'top-0',
        // 'left-0',
        // 'z-50'
        'px-8',
        'py-16',
        'bg-purple-light-300',
        'min-h-screen'
      )}
      {...props}
    ></div>
  )
}

export default FormNote

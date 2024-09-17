// utilities
import cx from 'classnames'

export const FormContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'bottom-0',
        'z-[70]',
        'px-8',
        'py-16',
        'bg-purple-light-300',
        'flex',
        'flex-col',
        'gap-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

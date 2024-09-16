'use client'

// components
import Image from 'next/image'
import CalendarSvg from '@svg/calendar.svg'
import NoteSvg from '@svg/note.svg'
import PlusSvg from '@svg/plus.svg'

// utilities
import cx from 'classnames'

// types
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const AddData = () => {
  return (
    <div
      className={cx(
        'fixed',
        'h-screen',
        'w-screen',
        'bg-grey-600',
        'top-0',
        'left-0',
        'z-50'
      )}
    >
      <div className={cx('relative', 'h-full')}>
        <div
          className={cx(
            'absolute',
            'right-6',
            'bottom-6',
            'flex',
            'flex-col',
            'justify-center',
            'gap-6'
          )}
        >
          <AddDataButton heading="Note" svg={NoteSvg} />
          <AddDataButton heading="Schedule" svg={CalendarSvg} />
          <div className={cx('rounded-full', 'bg-purple-light-300', 'p-4')}>
            <Image alt="" src={PlusSvg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddData

const AddDataButton = ({
  heading,
  svg,
  ...props
}: {
  heading: string
  svg: string | StaticImport
}) => {
  return (
    <div className={cx('relative')} {...props}>
      <div
        className={cx(
          'absolute',
          'top-1/2',
          'right-0',
          '-translate-x-[64px]',
          '-translate-y-1/2'
        )}
      >
        <p>{heading}</p>
      </div>
      <div
        className={cx(
          'rounded-full',
          'bg-purple-light-300',
          'p-3',
          'w-[20px]',
          'mx-auto'
        )}
      >
        <Image alt="" src={svg} />
      </div>
    </div>
  )
}

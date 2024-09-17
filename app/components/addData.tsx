'use client'

// components
import Image from 'next/image'
import CalendarSvg from '@svg/calendar.svg'
import NoteSvg from '@svg/note.svg'
import PlusSvg from '@svg/plus.svg'

// modules
import FormNote from '@components/forms/formNote'
import FormSchedule from '@components/forms/formSchedule'

// utilities
import cx from 'classnames'
import { useState, useEffect } from 'react'

// types
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const AddData = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [formNoteIsActive, setFormNoteIsActive] = useState<boolean>(false)
  const [formScheduleIsActive, setFormScheduleIsActive] =
    useState<boolean>(false)

  useEffect(() => {
    if (isActive || formNoteIsActive || formScheduleIsActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isActive, formNoteIsActive, formScheduleIsActive])

  return (
    <>
      <div
        className={cx(
          'fixed',
          'h-screen',
          'w-screen',
          'top-0',
          'left-0',
          'z-30',
          'pointer-events-none',
          ...(isActive ? ['bg-grey-600'] : ['bg-transparent'])
        )}
      />
      {formNoteIsActive && <FormNote setFormIsActive={setFormNoteIsActive} />}
      {formScheduleIsActive && (
        <FormSchedule setFormIsActive={setFormScheduleIsActive} />
      )}
      <div
        className={cx(
          'fixed',
          'right-6',
          'bottom-6',
          'flex',
          'flex-col',
          'justify-center',
          'gap-6',
          'z-50'
        )}
      >
        {isActive && (
          <button
            onClick={() => {
              setIsActive((prevState) => !prevState)
              setFormNoteIsActive((prevState) => !prevState)
            }}
          >
            <AddDataButton heading="Note" svg={NoteSvg} />
          </button>
        )}
        {isActive && (
          <button
            onClick={() => {
              setIsActive((prevState) => !prevState)
              setFormScheduleIsActive((prevState) => !prevState)
            }}
          >
            <AddDataButton heading="Schedule" svg={CalendarSvg} />
          </button>
        )}
        <button
          onClick={() => setIsActive((prevState) => !prevState)}
          className={cx('rounded-full', 'bg-purple-light-300', 'p-4')}
        >
          <Image
            alt=""
            src={PlusSvg}
            className={cx(...(isActive ? ['rotate-45'] : ['']))}
          />
        </button>
      </div>
    </>
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
